import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

const EASE = [0.65, 0, 0.35, 1];
const ZOOM = 1.85;
const IGNORE = "a, button, input, textarea, select, label, [data-no-zoom]";

/**
 * The whole site lives in one screen-sized box. Clicking anywhere that isn't
 * interactive swings the box in 3D toward the click and zooms into that spot.
 * Click again, press Esc or scroll to swing back out.
 */
export default function ZoomStage({ children }) {
  const controls = useAnimationControls();
  const reduce = useReducedMotion();
  const scrollerRef = useRef(null);
  const busy = useRef(false);
  const lastTilt = useRef({ nx: 0, ny: 0 });
  const [zoomed, setZoomed] = useState(false);

  const zoomIn = useCallback(
    async (x, y) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const nx = (x / w - 0.5) * 2; // -1 … 1
      const ny = (y / h - 0.5) * 2;
      lastTilt.current = { nx, ny };
      busy.current = true;
      setZoomed(true);
      controls.set({ originX: x / w, originY: y / h });
      if (reduce) {
        await controls.start({ scale: ZOOM, transition: { duration: 0.25 } });
      } else {
        await controls.start({
          scale: [1, 0.82, ZOOM],
          rotateY: [0, nx * 22, 0],
          rotateX: [0, -ny * 16, 0],
          borderRadius: [0, 28, 0],
          transition: { duration: 1.05, times: [0, 0.42, 1], ease: EASE },
        });
      }
      busy.current = false;
    },
    [controls, reduce]
  );

  const zoomOut = useCallback(async () => {
    const { nx, ny } = lastTilt.current;
    busy.current = true;
    if (reduce) {
      await controls.start({ scale: 1, transition: { duration: 0.25 } });
    } else {
      await controls.start({
        scale: [ZOOM, 0.86, 1],
        rotateY: [0, -nx * 16, 0],
        rotateX: [0, ny * 12, 0],
        borderRadius: [0, 28, 0],
        transition: { duration: 0.9, times: [0, 0.5, 1], ease: EASE },
      });
    }
    setZoomed(false);
    busy.current = false;
  }, [controls, reduce]);

  // In-page links: instead of scrolling, the screen-sized box turns like a
  // cube face and the target section arrives on the next face.
  const rotateTo = useCallback(
    async (hash) => {
      const scroller = scrollerRef.current;
      const target = hash === "#top" ? null : document.querySelector(hash);
      if (!scroller || (hash !== "#top" && !target)) return;
      const nextTop = target
        ? target.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop
        : 0;
      const jump = () => {
        scroller.scrollTop = nextTop;
        history.replaceState(null, "", hash);
      };
      if (reduce) return jump();

      busy.current = true;
      const dir = nextTop >= scroller.scrollTop ? 1 : -1; // going down turns left
      const w = window.innerWidth;
      controls.set({ originX: 0.5, originY: 0.5, originZ: -w / 2 });
      await controls.start({
        rotateY: -90 * dir,
        scale: 0.78,
        borderRadius: 24,
        transition: { duration: 0.55, ease: [0.55, 0, 0.75, 0.25] },
      });
      jump();
      controls.set({ rotateY: 90 * dir });
      await controls.start({
        rotateY: 0,
        scale: [0.78, 0.78, 1],
        borderRadius: [24, 24, 0],
        transition: {
          rotateY: { duration: 0.6, ease: [0.2, 0.75, 0.35, 1] },
          scale: { duration: 0.9, times: [0, 0.6, 1], ease: EASE },
          borderRadius: { duration: 0.9, times: [0, 0.6, 1] },
        },
      });
      controls.set({ originZ: 0 });
      busy.current = false;
    },
    [controls, reduce]
  );

  const onClick = (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
      e.preventDefault();
      if (busy.current) return;
      const go = () => rotateTo(anchor.getAttribute("href"));
      if (zoomed) zoomOut().then(go);
      else go();
      return;
    }
    if (busy.current) return;
    if (e.target.closest(IGNORE)) return;
    if (window.getSelection()?.toString()) return; // let people select text
    if (zoomed) zoomOut();
    else zoomIn(e.clientX, e.clientY);
  };

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e) => e.key === "Escape" && !busy.current && zoomOut();
    const onWheel = () => !busy.current && zoomOut();
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
    };
  }, [zoomed, zoomOut]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#060605]" style={{ perspective: "1800px" }}>
      <motion.div
        animate={controls}
        initial={{ scale: 1, rotateX: 0, rotateY: 0, borderRadius: 0, originZ: 0 }}
        onClick={onClick}
        className="grain absolute inset-0 overflow-hidden bg-ink shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] ring-1 ring-line"
        style={{ transformStyle: "preserve-3d", cursor: zoomed ? "zoom-out" : "zoom-in" }}
      >
        <div
          ref={scrollerRef}
          className={`scroller h-full w-full ${zoomed ? "overflow-hidden" : "overflow-y-auto"}`}
        >
          {children}
        </div>

        <div
          data-no-zoom
          className="pointer-events-none absolute bottom-5 right-5 hidden items-center gap-2 rounded-full border border-line bg-ink/80 px-3 py-1.5 backdrop-blur md:flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="label !text-[10px]">
            {zoomed ? "Click · Esc · Scroll to return" : "Use the menu to turn the page · click to look closer"}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

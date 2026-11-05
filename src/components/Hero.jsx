import { motion } from "framer-motion";
import { profile } from "../data";

const rise = (delay = 0) => ({
  initial: { y: "105%" },
  animate: { y: 0 },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-line">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-16 pt-14 md:grid-cols-12 md:px-10 md:pb-24 md:pt-24">
        <div className="md:col-span-12 flex items-center justify-between">
          <p className="label">Portfolio — 2025</p>
          <p className="label hidden md:block">@{profile.handle}</p>
        </div>

        <h1 className="md:col-span-12 font-serif text-[17vw] leading-[0.86] tracking-tightest md:text-[11.5vw] xl:text-[10.5rem]">
          <span className="block overflow-hidden">
            <motion.span className="block" {...rise(0.05)}>Philbert</motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block italic text-paper/90 md:pl-[12%]" {...rise(0.15)}>
              Iradukunda<span className="text-signal">.</span>
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="md:col-span-5 md:col-start-1 flex items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <figure className="group relative w-40 overflow-hidden rounded-full border border-line p-1.5 md:w-52">
            <img
              src="/pro.jpg"
              alt="Portrait of Philbert Iradukunda"
              className="aspect-square w-full rounded-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
          </figure>
        </motion.div>

        <motion.div
          className="md:col-span-6 md:col-start-7 flex flex-col justify-end gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xl leading-snug text-paper/85 md:text-2xl">
            {profile.role} building responsive, rich and scalable web applications —
            <span className="text-mute"> from the interface people touch to the server that keeps it running.</span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition hover:bg-signal"
            >
              See selected work
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="rounded-full border border-line px-6 py-3 text-sm transition hover:border-paper">
              Start a project
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}

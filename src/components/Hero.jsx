import { motion } from "framer-motion";
import { profile } from "../data";

const ease = [0.16, 1, 0.3, 1];
const principles = ["Responsive", "Rich", "Scalable"];

export default function Hero() {
  return (
    <section id="top" className="card tone-dark flex min-h-[calc(100vh-5.5rem)] flex-col">
      {/* Meta row */}
      <div className="grid grid-cols-2 border-b border-fg/15 px-5 py-4 md:grid-cols-3 md:px-8">
        <span className="label">Portfolio 2025</span>
        <span className="label hidden text-center md:block">{profile.role}</span>
        <span className="label text-right">@{profile.handle}</span>
      </div>

      {/* Body */}
      <div className="grid flex-1 gap-10 px-5 py-10 md:grid-cols-12 md:px-8 md:py-12">
        <ol className="md:col-span-5">
          {principles.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease }}
              className="flex items-baseline gap-5 border-t border-fg/15 py-3 last:border-b"
            >
              <span className="font-mono text-xs text-fg/50">{i + 1}</span>
              <span className="display text-4xl md:text-5xl">{p}</span>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="flex flex-col gap-7 md:col-span-6 md:col-start-7"
        >
          <div className="flex items-center gap-4">
            <figure className="group w-24 shrink-0 overflow-hidden rounded-full border border-fg/15 p-1 md:w-28">
              <img
                src="/me.png"
                alt="Portrait of Philbert Iradukunda"
                className="aspect-square w-full rounded-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
              />
            </figure>
            <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-onaccent">
              Open to work
            </span>
          </div>
          <p className="max-w-lg text-lg leading-snug md:text-xl">
            {profile.role} building responsive, rich and scalable web applications —
            <span className="text-fg/55"> from the interface people touch to the server that keeps it running.</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-onaccent transition hover:brightness-110"
            >
              See selected work <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="rounded-full border border-fg/25 px-6 py-3 text-sm transition hover:border-fg">
              Start a project
            </a>
          </div>
        </motion.div>
      </div>

      {/* Name */}
      <div className="flex items-end justify-between gap-4 border-t border-fg/15 px-5 pb-5 pt-6 md:px-8 md:pb-7">
        <h1 className="display text-[15vw] md:text-[8.5vw] xl:text-[8rem]">
          <span className="block overflow-hidden">
            <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease }}>
              Philbert
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease }}>
              Iradukunda
            </motion.span>
          </span>
        </h1>
        <span className="mb-2 hidden h-16 w-16 shrink-0 bg-accent md:block xl:h-24 xl:w-24" />
      </div>
    </section>
  );
}

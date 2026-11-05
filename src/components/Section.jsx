import { motion } from "framer-motion";
import { profile } from "../data";

/** A deck-style "slide": corner meta row, big condensed title, then content. */
export default function Section({ id, n, title, tone = "dark", aside, children }) {
  return (
    <section id={id} className={`card tone-${tone}`}>
      <div className="grid grid-cols-2 border-b border-fg/15 px-5 py-4 md:grid-cols-3 md:px-8">
        <span className="label">{n}</span>
        <span className="label hidden text-center md:block">{profile.name}</span>
        <span className="label text-right">{id}</span>
      </div>

      <div className="px-5 py-14 md:px-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 grid items-end gap-6 md:mb-16 md:grid-cols-12"
        >
          <h2 className="display text-6xl md:col-span-8 md:text-8xl">{title}</h2>
          {aside && <p className="max-w-xs text-sm leading-relaxed text-fg/60 md:col-span-4 md:justify-self-end">{aside}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

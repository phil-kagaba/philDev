import { motion } from "framer-motion";

export default function Section({ id, n, title, aside, children }) {
  return (
    <section id={id} className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12"
        >
          <p className="label md:col-span-3">
            <span className="text-signal">{n}</span> &nbsp;/&nbsp; {id}
          </p>
          <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:col-span-6 md:text-7xl">{title}</h2>
          {aside && <p className="self-end text-sm leading-relaxed text-mute md:col-span-3">{aside}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

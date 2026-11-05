import { motion } from "framer-motion";
import Section from "./Section";
import { capabilities } from "../data";

export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      n="03"
      tone="dark"
      title="What I do"
      aside="One person across the whole stack, so nothing gets lost between design and deploy."
    >
      <div className="grid gap-10 md:grid-cols-3 md:gap-6">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.group}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col border-t-2 border-fg pt-5"
          >
            <div className="mb-4 flex items-baseline justify-between">
              <h3 className="display text-4xl">{c.group}</h3>
              <span className="font-mono text-xs">0{i + 1}</span>
            </div>
            <p className="mb-8 max-w-xs text-sm leading-relaxed text-fg/70">{c.note}</p>
            <ul className="mt-auto">
              {c.items.map((item, j) => (
                <li key={item} className="flex items-center justify-between border-t border-fg/20 py-2.5 text-base font-medium">
                  {item}
                  <span className="font-mono text-[10px] text-fg/50">{String(j + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

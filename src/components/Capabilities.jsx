import { motion } from "framer-motion";
import Section from "./Section";
import { capabilities } from "../data";

export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      n="02"
      title={<>What I <em>do</em></>}
      aside="One person across the whole stack, so nothing gets lost between design and deploy."
    >
      <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.group}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col bg-ink p-8 md:min-h-[420px] md:p-10"
          >
            <div className="mb-10 flex items-baseline justify-between">
              <h3 className="font-serif text-4xl italic">{c.group}</h3>
              <span className="font-mono text-xs text-mute">0{i + 1}</span>
            </div>
            <p className="mb-10 max-w-xs text-sm leading-relaxed text-mute">{c.note}</p>
            <ul className="mt-auto">
              {c.items.map((item) => (
                <li
                  key={item}
                  className="group flex items-center justify-between border-t border-line py-3 text-lg tracking-tight"
                >
                  {item}
                  <span className="h-1.5 w-1.5 rounded-full bg-paper/20 transition group-hover:bg-signal" />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

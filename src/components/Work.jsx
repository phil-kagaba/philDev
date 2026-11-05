import Section from "./Section";
import { works, profile } from "../data";

const cols = "grid grid-cols-12 gap-x-4 gap-y-3 px-3 md:px-4";

function Row({ index, title, type, description, stack = [], link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${cols} items-start border-t border-fg/15 py-6 transition-colors duration-300 hover:bg-accent hover:text-onaccent md:py-7`}
    >
      <span className="col-span-2 pt-1 font-mono text-xs opacity-60 md:col-span-1">{String(index).padStart(2, "0")}</span>
      <span className="col-span-10 md:col-span-4">
        <span className="display block text-3xl md:text-4xl">{title}</span>
        <span className="mt-2 block font-mono text-[10px] uppercase tracking-widest opacity-60">{type}</span>
      </span>
      <span className="col-span-10 col-start-3 text-sm leading-relaxed opacity-70 md:col-span-4 md:col-start-auto">
        {description}
      </span>
      <span className="col-span-10 col-start-3 flex flex-wrap gap-1.5 md:col-span-2 md:col-start-auto">
        {stack.map((s) => (
          <span key={s} className="rounded-full border border-fg/20 px-2 group-hover:border-onaccent/30 py-0.5 font-mono text-[10px] uppercase tracking-wider opacity-80">
            {s}
          </span>
        ))}
      </span>
      <span className="col-span-12 flex justify-end md:col-span-1">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-fg/25 transition group-hover:-rotate-45 group-hover:border-onaccent group-hover:bg-onaccent group-hover:text-accent">
          →
        </span>
      </span>
    </a>
  );
}

export default function Work() {
  return (
    <Section
      id="work"
      n="02"
      tone="green"
      title="Selected work"
      aside="Commercial sites, e-commerce, blogs and more. Each one built end to end."
    >
      <div className={`${cols} hidden pb-3 md:grid`}>
        {["No.", "Project", "About", "Stack"].map((h, i) => (
          <span key={h} className={`label ${["md:col-span-1", "md:col-span-4", "md:col-span-4", "md:col-span-2"][i]}`}>
            {h}
          </span>
        ))}
      </div>
      <div className="border-b border-fg/15">
        {works.map((w, i) => (
          <Row key={w.title} index={i + 1} {...w} />
        ))}
        <Row
          index={works.length + 1}
          title="More on GitHub"
          type="Archive"
          description="Experiments, open-source work and the rest of what I've shipped."
          stack={["GitHub"]}
          link={profile.github}
        />
      </div>
    </Section>
  );
}

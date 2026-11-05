import Section from "./Section";
import { works, profile } from "../data";

function Row({ index, title, type, description, stack = [], link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative grid grid-cols-12 items-baseline gap-4 border-t border-line px-3 py-8 transition-colors md:px-5 md:py-10"
    >
      <span className="absolute inset-0 origin-bottom scale-y-0 bg-paper transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100" />
      <span className="relative col-span-2 font-mono text-xs text-mute transition group-hover:text-ink/60 md:col-span-1">
        {String(index).padStart(2, "0")}
      </span>
      <span className="relative col-span-10 font-serif text-4xl leading-none tracking-tight transition group-hover:translate-x-2 group-hover:text-ink md:col-span-5 md:text-6xl">
        {title}
      </span>
      <span className="relative col-span-10 col-start-3 flex flex-col gap-3 md:col-span-4 md:col-start-auto">
        <span className="text-sm leading-relaxed text-mute transition group-hover:text-ink/70">{description}</span>
        {stack.length > 0 && (
          <span className="flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper/70 transition group-hover:border-ink/20 group-hover:text-ink/70"
              >
                {s}
              </span>
            ))}
          </span>
        )}
      </span>
      <span className="relative col-span-12 flex items-center justify-between md:col-span-2 md:justify-end md:gap-6">
        <span className="label whitespace-nowrap transition group-hover:text-ink/60">{type}</span>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-lg transition group-hover:-rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
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
      n="01"
      title={<>Selected <em>work</em></>}
      aside="Commercial sites, e-commerce, blogs and more. Each one built end to end."
    >
      <div className="border-b border-line">
        {works.map((w, i) => (
          <Row key={w.title} index={i + 1} {...w} />
        ))}
        <Row
          index={works.length + 1}
          title="More on GitHub"
          type="Archive"
          description="Experiments, open-source work and the rest of what I've shipped."
          link={profile.github}
        />
      </div>
    </Section>
  );
}

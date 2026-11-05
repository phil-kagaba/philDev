import Section from "./Section";
import { profile } from "../data";

export default function About() {
  const facts = [
    ["Name", profile.name],
    ["Handle", profile.handle],
    ["Role", profile.role],
    ["Focus", "Frontend + backend"],
  ];

  return (
    <Section id="about" n="04" tone="green" title="About me">
      <div className="grid gap-12 md:grid-cols-12">
        <p className="text-2xl font-medium leading-[1.25] tracking-tight md:col-span-7 md:text-4xl">
          I&apos;m {profile.name.split(" ")[0]} — known online as{" "}
          <span className="bg-accent px-1.5 text-onaccent">{profile.handle}</span>. I specialise in frontend and backend
          development, taking ideas from a rough sketch to a live product. Let&apos;s bring your project to life.
        </p>

        <dl className="self-end md:col-span-4 md:col-start-9">
          {facts.map(([k, v]) => (
            <div key={k} className="grid grid-cols-3 gap-4 border-t border-fg/15 py-3 last:border-b">
              <dt className="label pt-0.5">{k}</dt>
              <dd className="col-span-2 text-sm font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

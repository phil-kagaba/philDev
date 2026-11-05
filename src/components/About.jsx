import Section from "./Section";
import { profile } from "../data";

const principles = [
  ["Responsive", "Layouts that hold up from a small phone to a wide monitor."],
  ["Rich", "Interaction and motion that make a product feel considered."],
  ["Scalable", "Code and data structured to grow with the business."],
];

export default function About() {
  return (
    <Section id="about" n="03" title={<>About <em>me</em></>}>
      <div className="grid gap-16 md:grid-cols-12">
        <p className="font-serif text-3xl leading-[1.15] tracking-tight text-paper/90 md:col-span-8 md:col-start-4 md:text-5xl">
          I&apos;m {profile.name.split(" ")[0]} — known online as{" "}
          <span className="italic text-signal">{profile.handle}</span>. I specialise in frontend and backend
          development, taking ideas from a rough sketch to a live product. Let&apos;s bring your project to life.
        </p>

        <div className="grid gap-10 md:col-span-9 md:col-start-4 md:grid-cols-3">
          {principles.map(([t, d], i) => (
            <div key={t} className="border-t border-paper/40 pt-5">
              <p className="label mb-3">
                <span className="text-signal">({i + 1})</span>
              </p>
              <h3 className="mb-2 text-lg font-medium">{t}</h3>
              <p className="text-sm leading-relaxed text-mute">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

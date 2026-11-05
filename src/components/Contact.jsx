import { useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { profile } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the mailto link still works */
    }
  };

  return (
    <section id="contact" className="card tone-dark mb-24 md:mb-3">
      <div className="grid grid-cols-2 border-b border-fg/15 px-5 py-4 md:grid-cols-3 md:px-8">
        <span className="label">05</span>
        <span className="label hidden text-center md:block">{profile.name}</span>
        <span className="label text-right">contact</span>
      </div>

      <div className="px-5 pb-10 pt-14 md:px-8 md:pt-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="display text-[18vw] md:text-[10vw] xl:text-[9.5rem]">
            Let&apos;s
            <br />
            talk
          </h2>
          <span className="mb-3 hidden h-16 w-16 shrink-0 bg-accent md:block xl:h-24 xl:w-24" />
        </div>

        <div className="mt-14 grid gap-12 border-t border-fg/15 pt-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label mb-4">Write to me</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={`mailto:${profile.email}`} className="link-underline break-all text-xl tracking-tight md:text-3xl">
                {profile.email}
              </a>
              <button
                onClick={copy}
                className="rounded-full bg-accent px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-onaccent transition hover:brightness-110"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="label mb-4">Elsewhere</p>
            <ul>
              {[
                { label: "GitHub", href: profile.github, Icon: FaGithub },
                { label: "Instagram", href: profile.instagram, Icon: FaInstagram },
              ].map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-t border-fg/15 py-4 text-lg transition hover:text-accent"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="text-base opacity-60 group-hover:opacity-100" />
                      {label}
                    </span>
                    <span className="transition group-hover:-rotate-45">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className="flex flex-col gap-3 border-t border-fg/15 px-5 py-5 text-xs text-fg/55 md:flex-row md:items-center md:justify-between md:px-8 md:pr-80">
        <span>© 2025 {profile.name}</span>
        <span>Designed &amp; built by {profile.handle}</span>
        <a href="#top" className="link-underline self-start text-fg md:self-auto">Back to top ↑</a>
      </footer>
    </section>
  );
}

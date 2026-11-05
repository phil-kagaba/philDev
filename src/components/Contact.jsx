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
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 pb-36 pt-20 md:px-10 md:pb-24 md:pt-32">
        <p className="label mb-10">
          <span className="text-signal">04</span> &nbsp;/&nbsp; contact
        </p>

        <h2 className="font-serif text-[20vw] leading-[0.82] tracking-tightest md:text-[13vw] xl:text-[12rem]">
          Let&apos;s <em className="text-signal">talk</em>.
        </h2>

        <div className="mt-16 grid gap-12 border-t border-line pt-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label mb-4">Write to me</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="link-underline break-all text-2xl tracking-tight md:text-4xl"
              >
                {profile.email}
              </a>
              <button
                onClick={copy}
                className="rounded-full border border-line px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-mute transition hover:border-paper hover:text-paper"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="label mb-4">Elsewhere</p>
            <ul className="flex flex-col">
              {[
                { label: "GitHub", href: profile.github, Icon: FaGithub },
                { label: "Instagram", href: profile.instagram, Icon: FaInstagram },
              ].map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-t border-line py-4 text-lg transition hover:text-signal"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="text-base text-mute group-hover:text-signal" />
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

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-6 pb-24 text-xs text-mute md:flex-row md:items-center md:justify-between md:px-10 md:pb-20">
          <span>© 2025 {profile.name}</span>
          <span>Designed &amp; built by {profile.handle}</span>
          <a href="#top" className="link-underline self-start text-paper md:self-auto">Back to top ↑</a>
        </div>
      </footer>
    </section>
  );
}

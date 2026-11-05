import { profile } from "../data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <>
      <header className="sticky top-0 z-40 p-2 md:p-3">
        <div className="tone-dark flex h-14 items-center justify-between rounded-full bg-bg/95 pl-2 pr-2 text-fg shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur md:pl-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent font-display text-sm font-extrabold text-onaccent">
              PI
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:block">{profile.name}</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="link-underline text-sm text-fg/75 hover:text-fg">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-onaccent transition hover:brightness-110"
          >
            Hire me
          </a>
        </div>
      </header>

      {/* Mobile tab bar */}
      <nav className="tone-dark fixed inset-x-3 bottom-3 z-40 flex justify-around rounded-full bg-bg/95 px-2 py-2 text-fg backdrop-blur md:hidden">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="px-2 py-1.5 text-xs text-fg/80">
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}

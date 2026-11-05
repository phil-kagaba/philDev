import { profile } from "../data";

const links = [
  { href: "#work", label: "Work", n: "01" },
  { href: "#capabilities", label: "Capabilities", n: "02" },
  { href: "#about", label: "About", n: "03" },
  { href: "#contact", label: "Contact", n: "04" },
];

export default function Nav() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-ink/75 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-paper/30 font-serif text-lg italic leading-none transition group-hover:border-signal group-hover:text-signal">
              P
            </span>
            <span className="text-sm font-medium tracking-tight">{profile.name}</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-paper/80 hover:text-paper">
                <span className="link-underline">{l.label}</span>
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium transition hover:border-signal hover:bg-signal hover:text-ink"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            Hire me
          </a>
        </div>
      </header>

      {/* Mobile tab bar */}
      <nav className="fixed inset-x-3 bottom-3 z-40 flex justify-around rounded-full border border-line bg-coal/90 px-2 py-2 backdrop-blur md:hidden">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="px-2 py-1.5 text-xs text-paper/80">
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}

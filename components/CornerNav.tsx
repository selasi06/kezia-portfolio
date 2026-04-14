import { navItems, site } from "@/lib/data";

export function CornerNav() {
  const [index, work, about, contact] = navItems;

  return (
    <nav
      aria-label="desktop"
      className="pointer-events-none fixed inset-0 z-40 hidden p-4 text-[11px] uppercase tracking-[0.08em] md:flex"
    >
      <a
        className="pointer-events-auto fixed left-4 top-4 grid-border bg-white px-3 py-2"
        href={index.href}
      >
        {site.name}
      </a>
      <a
        className="pointer-events-auto fixed right-4 top-4 grid-border bg-white px-3 py-2"
        href={work.href}
      >
        {work.label}
      </a>
      <a
        className="pointer-events-auto fixed bottom-4 left-4 grid-border bg-white px-3 py-2"
        href={about.href}
      >
        {about.label}
      </a>
      <a
        className="pointer-events-auto fixed bottom-4 right-4 grid-border bg-white px-3 py-2"
        href={contact.href}
      >
        {contact.label}
      </a>
    </nav>
  );
}

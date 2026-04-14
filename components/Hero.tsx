import { site } from "@/lib/data";

export function Hero() {
  return (
    <section className="min-h-screen border-b border-black/80 px-4 pt-20 md:px-16 md:pt-12">
      <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 grid-rows-[1fr_auto] border-x border-black/80 bg-white/70 md:grid-cols-12">
        <div className="col-span-1 border-b border-black/80 p-4 md:col-span-3 md:border-b-0 md:border-r">
          <p className="max-w-[18rem] text-xs uppercase tracking-[0.08em]">
            {site.role}
          </p>
        </div>
        <div className="col-span-1 flex items-center p-4 md:col-span-9 md:p-8">
          <h1 className="display-tight max-w-full break-words font-display font-black uppercase text-white mix-blend-difference">
            {site.heroWord}
          </h1>
        </div>
        <div className="col-span-1 grid grid-cols-1 border-t border-black/80 md:col-span-12 md:grid-cols-3">
          <p className="border-b border-black/80 p-4 text-sm md:border-b-0 md:border-r">
            {site.intro}
          </p>
          <p className="border-b border-black/80 p-4 text-sm md:border-b-0 md:border-r">
            {site.note}
          </p>
          <p className="p-4 text-sm">photos. layouts. small ideas.</p>
        </div>
      </div>
    </section>
  );
}

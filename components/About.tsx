import { site } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-4 pb-16 md:px-16 md:pb-24">
      <div className="grid border border-black/80 bg-white md:grid-cols-12">
        <div className="border-b border-black/80 p-4 md:col-span-7 md:border-b-0 md:border-r md:p-6">
          <h2 className="section-title font-display font-black uppercase">about</h2>
          <p className="mt-8 max-w-2xl text-lg leading-snug md:text-2xl">
            {site.about}
          </p>
        </div>
        <div
          id="contact"
          className="flex min-h-[18rem] flex-col justify-between p-4 md:col-span-5 md:p-6"
        >
          <p className="text-[11px] uppercase tracking-[0.08em]">contact</p>
          <div>
            <p className="font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
              {site.contact}
            </p>
            <p className="mt-6 border-t border-black/80 pt-4 text-sm">
              contact pending.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

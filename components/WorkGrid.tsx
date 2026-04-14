import { projects } from "@/lib/data";
import { RevealImage } from "./RevealImage";

export function WorkGrid() {
  return (
    <section id="work" className="border-b border-black/80 px-4 py-12 md:px-16 md:py-20">
      <div className="border border-black/80 bg-white">
        <div className="grid grid-cols-1 border-b border-black/80 md:grid-cols-[1.2fr_0.8fr]">
          <h2 className="section-title border-b border-black/80 p-4 font-display font-black uppercase md:border-b-0 md:border-r md:p-6">
            work
          </h2>
          <div className="flex items-end p-4 md:p-6">
            <p className="max-w-sm text-sm">{projects.length} fragments. not too polished.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              className="group border-b border-black/80 bg-white transition duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal md:border-r md:[&:nth-child(3n)]:border-r-0"
              key={project.id}
            >
              <div className="grid min-h-full grid-rows-[auto_1fr]">
                <RevealImage
                  alt={project.image.alt}
                  height={project.image.height}
                  priority={index < 2}
                  src={project.image.src}
                  width={project.image.width}
                />
                <div className="grid grid-cols-[1fr_auto] border-t border-black/80">
                  <div className="p-4">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.08em]">
                      {project.category} / {project.year}
                    </p>
                    <h3 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.06em]">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-xs text-sm">{project.description}</p>
                  </div>
                  <div className="border-l border-black/80 p-3 text-xs uppercase [writing-mode:vertical-rl]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

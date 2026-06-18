import Image from "next/image";
import type { ProjectType } from "@/data/content";

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  const isMobile = project.layout === "mobile";

  return (
    <div
      className={`flex flex-col gap-10 md:gap-16 lg:gap-24 items-center justify-between md:pl-[6vw] pb-24 md:pb-36 last:pb-0 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Kolom Gambar */}
      <div className="w-full md:w-[48%] flex justify-center">
        {isMobile ? (
          /* Portrait Mobile Phone mockup */
          <div className="relative w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] aspect-[9/16] overflow-hidden rounded-[28px] shadow-2xl border-4 border-charcoal/10 bg-neutral-900 transition-transform duration-500 hover:scale-[1.02]">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 60vw, 25vw"
                className="object-cover object-top"
              />
            )}
          </div>
        ) : (
          /* Landscape Desktop Mockup */
          <div className="relative w-full max-w-[560px] aspect-[16/10] overflow-hidden rounded-[28px] shadow-lg bg-[#1A1A1A] border border-charcoal/5 transition-transform duration-500 hover:scale-[1.02]">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 85vw, 45vw"
                className="object-cover object-top"
              />
            )}
          </div>
        )}
      </div>

      {/* Kolom Teks */}
      <div className="w-full md:w-[46%] flex flex-col justify-center max-w-[480px]">
        <h3 className="font-serif text-2xl italic text-charcoal md:text-3xl lg:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 md:mt-6 font-sans text-sm md:text-base leading-relaxed text-charcoal/80 whitespace-pre-line">
          {project.description}
        </p>
        
        {/* Tech Stack Badge */}
        <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-charcoal/10 bg-charcoal/[0.03] px-3.5 py-1.5 font-sans text-xs tracking-wide text-charcoal/80 md:text-sm">
          {project.stack.join(" / ")}
        </div>
      </div>
    </div>
  );
}

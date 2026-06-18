"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full bg-offwhite px-6 md:px-16 py-24 md:py-32"
    >
      {/* Judul Utama dengan White Space Luas */}
      <div className="mb-20 md:mb-32 md:pl-[6vw]">
        <h2 className="font-serif text-4xl italic leading-tight md:text-5xl lg:text-6xl text-charcoal">
          The Digital Gallery
        </h2>
      </div>

      {/* Daftar Karya disusun secara Vertikal Zigzag */}
      <div className="flex flex-col gap-24 md:gap-36">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

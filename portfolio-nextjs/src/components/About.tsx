import Image from "next/image";
import { about } from "@/data/content";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24 md:px-16 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-24">
        {/* Kolom kiri: foto personal natural di depan meja kerja/laptop */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-charcoal/5 md:h-[560px]">
          <Image
            src={about.image}
            alt="Foto personal natural di depan meja kerja"
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover"
          />
        </div>

        {/* Kolom kanan: judul, narasi, dan skill & tools */}
        <div>
          <h2 className="font-serif text-4xl italic md:text-5xl">
            {about.heading}
          </h2>

          <p className="mt-8 max-w-xl font-sans text-sm leading-relaxed text-charcoal/90 md:text-base">
            {about.paragraph}
          </p>

          <div className="mt-10">
            <h3 className="font-serif text-lg italic">
              {about.skillsHeading}
            </h3>

            {/*
              Grid 3 kolom: label | titik-dua | value.
              Karena ini SATU grid container, lebar kolom "max-content"
              otomatis sama untuk semua baris -> titik dua selalu lurus
              vertikal, terlepas dari panjang label.
            */}
            <div className="mt-4 grid grid-cols-[max-content_max-content_1fr] gap-x-3 gap-y-2 font-sans text-sm md:text-base">
              {about.skills.map((skill) => (
                <SkillRow key={skill.label} label={skill.label} value={skill.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  // React Fragment "diratakan" sehingga ketiga <span> ini menjadi
  // anak langsung dari grid container di atas.
  return (
    <>
      <span className="font-serif italic text-charcoal/90">{label}</span>
      <span className="text-charcoal/60">:</span>
      <span className="text-charcoal/90">{value}</span>
    </>
  );
}

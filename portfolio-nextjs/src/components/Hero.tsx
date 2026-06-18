"use client";

import Image from "next/image";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col overflow-hidden px-6 py-16 md:px-16 md:py-24"
    >
      {/* Header Nama di atas Grid */}
      <div className="md:pl-[6vw]">
        <h1 className="font-serif text-4xl italic leading-tight md:text-5xl lg:text-6xl text-charcoal">
          {profile.name}
        </h1>
        <p className="mt-2 font-sans text-sm tracking-[0.2em] text-charcoal/90 md:text-base">
          {profile.role}
        </p>
      </div>

      {/* STRUKTUR UTAMA (KUNCI HORIZONTAL) */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[65vh] mt-8 px-4 gap-8 md:gap-4">
        
        {/* KOLOM KIRI: MENU & SOSMED (Width tetap/fixed kecil) */}
        <div className="w-full md:w-[15%] flex flex-col justify-end min-h-[150px] md:min-h-[350px] md:pl-[6vw] z-10 relative">
          {/* Sosmed Instagram dll di bawah */}
          <ul className="space-y-3 font-sans text-sm mt-8 md:mt-0">
            {profile.heroLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* KOLOM TENGAH: FOTO BESAR */}
        <div className="w-full md:w-[50%] flex justify-center items-end relative h-full z-0">
          {/* Gunakan ukuran w-[450px] sampai w-[500px] agar foto tetap besar seperti di Figma */}
          <div className="relative w-[320px] md:w-[450px] aspect-[797/842] image-fade-bottom transition-transform duration-500 hover:scale-[1.01] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_85%,rgba(0,0,0,0)_100%)]">
            <Image
              src={profile.heroImage}
              alt={`Potret ${profile.name} mengenakan jas hitam`}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* KOLOM KANAN: TEKS DESKRIPSI (KECIL & MENTOK KANAN) */}
        <div className="w-full md:w-[35%] flex flex-col justify-center items-end text-right md:pl-8 z-10 relative">
          <div className="w-full max-w-[320px] text-left"> {/* Tetap text-left untuk teksnya, tapi kontainernya didorong ke kanan */}
            <p className="text-charcoal/50 text-xs tracking-widest uppercase mb-4">
              {profile.location}
            </p>
            <p className="text-charcoal text-base font-serif italic leading-relaxed mb-4">
              {profile.philosophyItalic}
            </p>
            <p className="text-charcoal/80 text-xs md:text-sm font-sans leading-relaxed">
              {profile.philosophyRest}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
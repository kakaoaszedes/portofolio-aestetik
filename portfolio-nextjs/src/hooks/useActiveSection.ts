"use client";

import { useEffect, useState } from "react";

/**
 * useActiveSection
 * ------------------
 * Mengamati elemen-elemen section berdasarkan `id` menggunakan
 * IntersectionObserver, lalu mengembalikan id section yang sedang
 * paling "aktif" (paling dominan di area tengah viewport).
 *
 * Dipakai oleh <Navigation /> untuk logic scrollspy:
 * menu aktif -> bold/hitam pekat, menu lain -> opacity-40.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pilih entry yang paling banyak terlihat di "pita tengah" viewport
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible?.target.id) {
          setActiveId(mostVisible.target.id);
        }
      },
      {
        // Anggap "aktif" ketika section berada di 40%-60% tengah viewport
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

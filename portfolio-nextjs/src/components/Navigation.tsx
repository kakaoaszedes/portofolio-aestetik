"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { navItems } from "@/data/content";

export default function Navigation() {
  const activeId = useActiveSection(navItems.map((item) => item.id));

  const handleClick =
    (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <>
      {/* Mobile Glassmorphic Navigation Pill */}
      <nav
        aria-label="Navigasi mobile"
        className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-6 rounded-full border border-charcoal/10 bg-offwhite/80 backdrop-blur-md px-6 py-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:hidden"
      >
        {navItems.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleClick(item.id)}
              aria-current={isActive ? "true" : undefined}
              className={[
                "font-sans text-[11px] tracking-widest uppercase transition-all duration-300 ease-soft-out",
                isActive
                  ? "font-bold text-charcoal opacity-100 scale-105"
                  : "text-charcoal opacity-55 hover:opacity-80",
              ].join(" ")}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Desktop Vertical Navigation */}
      <nav
        aria-label="Navigasi utama"
        className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-5 md:left-12 md:flex md:gap-6"
      >
        {navItems.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleClick(item.id)}
              aria-current={isActive ? "true" : undefined}
              className={[
                "font-sans text-sm transition-opacity duration-300 ease-soft-out md:text-base",
                isActive
                  ? "font-bold text-charcoal opacity-100"
                  : "text-charcoal opacity-40 hover:opacity-70",
              ].join(" ")}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </>
  );
}


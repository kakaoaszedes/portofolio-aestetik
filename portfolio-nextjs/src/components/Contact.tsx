import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-between px-6 py-16 md:px-16 md:py-20"
    >
      {/* Tepat di tengah layar: kutipan besar, Playfair Display Italic */}
      <div className="flex flex-1 items-center justify-center text-center">
        <p className="max-w-3xl font-serif text-4xl italic leading-tight md:text-6xl">
          &ldquo;{contact.quote}&rdquo;
        </p>
      </div>

      {/* Bawah tengah: barisan link horizontal, sans-serif tegak, renggang */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 pb-4 font-sans text-sm tracking-widest text-charcoal md:gap-x-10 md:text-base">
        {contact.links.map((link, index) => (
          <span key={link.label} className="flex items-center gap-x-4 md:gap-x-10">
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              {link.label}
            </a>
            {index < contact.links.length - 1 && (
              <span aria-hidden="true" className="select-none text-charcoal/40">
                •
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}

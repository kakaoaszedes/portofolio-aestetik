// =============================================================
// Semua teks & konten di satu tempat. Ganti nilai-nilai di sini
// untuk mempersonalisasi portfolio tanpa menyentuh komponen UI.
// =============================================================

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ProjectType {
  id: string;
  title: string; // judul kecil di atas mockup, contoh: "Web blog sejarah"
  stack: string[]; // daftar teknologi: HTML / CSS / REACT / Next.js
  image?: string; // path ke file gambar mockup
  layout?: "desktop" | "mobile"; // tipe mockup: desktop (lebar) atau mobile (tinggi)
  bgClass?: string; // kelas latar belakang Tailwind untuk mockup kontainer
  description?: string; // deskripsi lengkap proyek untuk layout vertikal zigzag
  mockupBrand?: string; // nama brand di pojok kiri atas mockup
  mockupNav?: string[]; // menu kecil di navbar mockup
  mockupHeadline?: string[]; // 2 baris headline besar di mockup
  mockupSubtitle?: string;
  mockupCta?: string;
}

export interface SkillRow {
  label: string;
  value: string;
}

export const profile = {
  name: "Vaska R. Al Farell",
  role: "Designer & Developer",
  location: "Based in Indonesia.",
  philosophyItalic:
    "I believe that every line of code can craft a beautiful piece of art—one that is not only seen, but truly felt.",
  philosophyRest:
    "With a mission to push the boundaries of digital spaces. I build fast, immersive, and visually stunning web experiences through creative engineering and constant experimentation.",
  // Letakkan foto personal (background transparan, jas hitam) di public/images/
  heroImage: "/images/foto1.png",
  heroLinks: [
    { label: "Instagram", href: "https://www.instagram.com/kvskael?igsh=M2N6OGZzbHp2emti" },
    { label: "Linkedin", href: "https://linkedin.com/" },
    { label: "Github", href: "https://github.com/kakaoaszedes" },
    { label: "Gmail", href: "mailto:psychompop@gmail.com" },
  ] as SocialLink[],
};

export const navItems: NavItem[] = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const projects: ProjectType[] = [
  {
    id: "web-blog-sejarah",
    title: "Web blog sejarah",
    image: "/images/web kakawinn .png",
    layout: "desktop",
    bgClass: "bg-[#1A1A1A]",
    description: "Kakawin Nusantara is an interactive digital library platform that restores classical Old Javanese literary manuscripts (Kakawin) into a modern web ecosystem. This website bridges historical documents rich in cultural values, making them inclusively, swiftly, and responsively accessible to the younger generation and global academics across boundaries of space and time.\n\nFar beyond a mere digital archiving system, the platform prioritizes reading comfort (readability) and is engineered with a modular architecture, fully prepared for future expansions such as transliteration features, smart search functionality, and sustainable content management.",
    stack: ["HTML", "CSS", "REACT", "Next.js"],
  },
  {
    id: "tracker-asupan",
    title: "Lumo app tracking",
    image: "/images/Lumo.jpg",
    layout: "mobile",
    bgClass: "bg-[#4c9b65]",
    description: "Lumo is a personalized mobile health and nutrition platform designed to simplify dietary management and cultivate sustainable healthy habits. Built with a user-centric approach, the app empowers users to reach their fitness goals through frictionless calorie logging, dynamic biometric tracking, and tailored meal recommendations—all wrapped in a clean, modern interface.\n\nFar beyond a basic tracker, Lumo leverages smart data visualization to turn complex nutritional metrics into clear, actionable progress insights that drive long-term lifestyle changes.",
    stack: ["React Native", "Expo", "Firebase"],
  },
  {
    id: "aplikasi-informasi",
    title: "UI/UX Case Study: Kakawin Reading Platform",
    image: "/images/kakawin.png",
    layout: "mobile",
    bgClass: "bg-[#FFFFFF]",
    description: "The interface leverages a high-contrast, editorial aesthetic designed specifically for long-form reading comfort. By pairing a prominent, elegant serif typeface for headers with a clean, highly legible sans-serif font for body text and metadata, the UI establishes a clear typographic hierarchy. The deliberate use of ample white space, minimal iconography, and a monochrome color palette eliminates visual noise, ensuring that the user’s focus remains entirely on the written content.\n\nUser Experience & Interaction Flow (UX): Designed with familiarity and intuition in mind, the platform features a segmented top-navigation bar (For you, Trending, Following) that allows users to seamlessly pivot between curated algorithmic content and personal subscriptions. Individual content cards are engineered with comprehensive micro-interactions, integrating social proof metrics (likes, comments, and reposts) directly below the article snippets to drive engagement. A persistent bottom navigation dock provides quick, thumb-zone access to core application features, while a floating action button (FAB) for writing ensures a frictionless path for user creation.",
    stack: ["Figma", "UI/UX", "Prototyping"],
  },
];

export const about = {
  heading: "About me",
  // Letakkan foto natural (portrait di depan meja kerja/laptop) di public/images/
  image: "/images/gueh.jpg",
  paragraph:
    "I am a Full-Stack Web Developer and UI/UX Designer dedicated to bridging the gap between visual aesthetics and powerful code. I don't just build websites; I craft digital experiences. By combining user-centered design principles in Figma with modern development frameworks like Next.js, I transform complex ideas into fast, immersive, and highly functional web applications.",
  skillsHeading: "Skill & Tools",
  skills: [
    { label: "Design & Creative", value: "Figma | Canva" },
    { label: "Development", value: "HTML | CSS | JavaScript" },
    {
      label: "Environment & Tools",
      value: "Vs Code | Google AI Studio | Antigrafity",
    },
    { label: "Framework", value: "React | Next.js | Tailwind CSS" },
  ] as SkillRow[],
};

export const contact = {
  quote: "Let's craft something beautiful together.",
  links: [
    { label: "Email", href: "mailto:psychompop@gmail.com" },
    { label: "GitHub", href: "https://github.com/kakaoaszedes" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/kvskael?igsh=M2N6OGZzbHp2emti" },
  ] as SocialLink[],
};

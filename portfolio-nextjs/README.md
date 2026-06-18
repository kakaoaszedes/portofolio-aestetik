# Portfolio Premium — Single Page (Next.js App Router + Tailwind CSS)

Struktur kode untuk website portfolio satu halaman premium dengan:
Hero → Projects (horizontal scroll via GSAP ScrollTrigger) → About Me → Contact.

## 1. Instalasi

```bash
npm install
npm run dev
```

Buka http://localhost:3000

> Proyek ini membutuhkan **GSAP** (`gsap` sudah ada di `package.json`) untuk
> efek pin + horizontal scroll di section Projects.

## 2. Struktur folder

```
src/
├── app/
│   ├── layout.tsx        # Root layout, load font Playfair Display & Inter
│   ├── page.tsx          # Menggabungkan Hero, Projects, About, Contact
│   └── globals.css       # Tailwind + utility .link-underline (animated underline)
├── components/
│   ├── Navigation.tsx    # Nav fixed kiri + scrollspy (IntersectionObserver)
│   ├── Hero.tsx
│   ├── Projects.tsx      # Section pin + horizontal scroll (GSAP ScrollTrigger)
│   ├── ProjectCard.tsx   # Kartu proyek (mockup hitam-emas)
│   ├── About.tsx         # Grid 2 kolom + grid 3-kolom untuk align titik dua
│   └── Contact.tsx       # Grand finale, kutipan besar + link sosial
├── data/
│   └── content.ts        # SEMUA teks/konten ada di sini (mudah diganti)
└── hooks/
    └── useActiveSection.ts  # Hook scrollspy yang dipakai Navigation
```

## 3. Personalisasi konten

Cukup ubah `src/data/content.ts`:

- `profile` → nama, role, link sosial Hero, teks filosofi.
- `projects` → tambah/ubah kartu proyek (judul, headline mockup, stack teknologi).
  Tambahkan lebih dari satu item agar horizontal scroll lebih terasa.
- `about` → paragraf narasi & daftar Skill & Tools.
- `contact` → kutipan besar & link sosial penutup.

## 4. Mengganti gambar

Letakkan file foto asli Anda di `public/images/` lalu timpa:

- `hero-portrait.png` — foto personal, background transparan, jas hitam (Hero).
- `about-portrait.png` — foto natural di depan meja kerja/laptop (About).

File placeholder sudah disediakan agar proyek bisa langsung dijalankan tanpa error.

## 5. Catatan teknis

- **Scrollspy**: `useActiveSection` mengamati `#projects`, `#about`, `#contact`
  dengan `IntersectionObserver`. Menu yang sedang terlihat di tengah viewport
  otomatis menjadi bold/hitam pekat, menu lain `opacity-40`.
- **Horizontal scroll Projects**: section di-*pin* (`ScrollTrigger.pin`) lalu
  track kartu digeser horizontal sebesar `scrollWidth - clientWidth` saat
  pengguna scroll vertikal (`scrub: 1`). Tambah kartu baru di `data/content.ts`
  — jarak scroll otomatis menyesuaikan.
- **Animated underline**: class utility `.link-underline` di `globals.css`
  memakai `::after` + `transform: scaleX()` supaya transisinya halus (GPU-friendly).
- Semua warna & font diatur lewat `tailwind.config.ts`
  (`offwhite`, `charcoal`, `gold`, `font-serif` = Playfair Display, `font-sans` = Inter).

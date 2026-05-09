# Portfolio — Fullstack Developer

Portofolio modern dengan Next.js, TypeScript, dan CSS Modules.

## ✦ Tech Stack

- **Framework:** Next.js 14 (Pages Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + Google Fonts
- **Deploy:** Vercel (zero-config)

---

## 🚀 Cara Deploy ke Vercel

### Opsi 1: Via GitHub (Rekomendasi)

1. **Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "initial: portfolio"
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```

2. **Connect ke Vercel:**
   - Buka [vercel.com](https://vercel.com) → Login
   - Klik **"Add New Project"**
   - Import repo GitHub kamu
   - Klik **Deploy** — selesai! 🎉

### Opsi 2: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 💻 Development Lokal

```bash
npm install
npm run dev
# Buka http://localhost:3000
```

## 🔧 Build & Test

```bash
npm run build
npm start
```

---

## 🎨 Kustomisasi

### Ganti Nama & Info
Edit file-file berikut:
- `pages/index.tsx` → meta title & description
- `components/Hero.tsx` → nama, tagline, statistik
- `components/Projects.tsx` → daftar project
- `components/Skills.tsx` → tech stack
- `components/Contact.tsx` → email & link sosial media

### Ganti Warna
Semua warna ada di `styles/globals.css`:
```css
:root {
  --c1: #FF4D00;  /* Oranye — warna utama */
  --c2: #FFD600;  /* Kuning — aksen */
  --c3: #00C2FF;  /* Biru   — link */
  --c4: #7B2FFF;  /* Ungu   — blob */
}
```

---

## 📂 Struktur File

```
portfolio/
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── Skills.tsx / .module.css
│   ├── Projects.tsx / .module.css
│   └── Contact.tsx / .module.css
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── styles/
│   └── globals.css
├── vercel.json
└── package.json
```

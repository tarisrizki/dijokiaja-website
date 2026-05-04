# 🎓 Dijokiaja - Website Joki Tugas

Website landing page profesional untuk layanan joki tugas Dijokiaja.
Dibangun dengan **React + TypeScript + Vite**.

---

## 🚀 Cara Deploy (GRATIS)

### Option 1: Netlify (Paling Mudah)

1. Buat akun di https://netlify.com
2. Klik **"Add new site"** → **"Deploy manually"**
3. Build project dulu di komputer:
   ```bash
   npm install
   npm run build
   ```
4. Drag & drop folder `/dist` ke Netlify
5. Website langsung live dengan URL gratis! ✅
6. Opsional: sambungkan domain sendiri (dijokiaja.com)

### Option 2: Vercel (Recommended untuk Developer)

1. Upload project ke GitHub
2. Buka https://vercel.com dan login dengan akun GitHub
3. Klik "Import Project" → pilih repo dijokiaja
4. Klik "Deploy" — otomatis build & live! ✅
5. URL: `dijokiaja.vercel.app` (gratis)

### Option 3: GitHub Pages

1. Upload ke repo GitHub
2. Settings → Pages → Source: GitHub Actions
3. Tambahkan workflow file `.github/workflows/deploy.yml`

---

## 💻 Development Lokal

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview
```

---

## ✏️ Kustomisasi

### Ganti nomor WhatsApp
File: `src/App.tsx`
```typescript
const WA_NUMBER = '0881082397879' // Ganti nomor di sini
```

### Ganti warna brand
File: `src/index.css`
```css
--indigo: #4F46E5;  /* Warna utama */
--orange: #F97316;  /* Warna aksen/CTA */
```

### Tambah/edit layanan
File: `src/components/Services.tsx`
Edit array `serviceCategories`

### Edit testimoni
File: `src/components/Testimonials.tsx`
Edit array `testimonials`

---

## 📁 Struktur File

```
dijokiaja/
├── index.html          # SEO meta tags lengkap
├── public/
│   ├── favicon.svg     # Logo favicon
│   └── robots.txt      # SEO robots
├── netlify.toml        # Config Netlify
├── vercel.json         # Config Vercel
└── src/
    ├── App.tsx         # Root component + dark/light mode
    ├── index.css       # Global styles + CSS variables
    └── components/
        ├── Logo.tsx        # SVG Logo Dijokiaja
        ├── Header.tsx      # Header + nav + dark mode toggle
        ├── Hero.tsx        # Hero section + mascot
        ├── Stats.tsx       # Angka statistik
        ├── Services.tsx    # Semua layanan (30+ jenis)
        ├── HowItWorks.tsx  # 3 langkah cara order
        ├── WhyUs.tsx       # Keunggulan (8 poin)
        ├── Testimonials.tsx # 6 testimoni pelanggan
        ├── FAQ.tsx         # FAQ accordion (7 pertanyaan)
        ├── CTA.tsx         # Call to action final
        ├── Footer.tsx      # Footer kompak
        └── FloatingWA.tsx  # Tombol WA floating
```

---

## 🔍 SEO Features

- ✅ Meta title & description optimal
- ✅ Open Graph tags (Facebook/WhatsApp share)
- ✅ Twitter Card
- ✅ JSON-LD Structured Data (LocalBusiness)
- ✅ Canonical URL
- ✅ robots.txt
- ✅ Semantic HTML (h1, h2, h3, nav, main, section, footer)
- ✅ Mobile responsive
- ✅ Fast load (Vite build)

---

## 📞 Kontak

WhatsApp: **0881082397879**
Brand: **Dijokiaja** | Berdiri Sejak 2023

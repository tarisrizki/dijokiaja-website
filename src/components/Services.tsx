interface ServicesProps {
  waLink: string
}

const serviceCategories = [
  {
    cat: '💻 Teknologi & Coding',
    color: '#4F46E5',
    bg: 'rgba(79,70,229,0.08)',
    items: [
      { icon: '🖥️', name: 'Pemrograman / Coding', desc: 'Python, Java, C++, PHP, JS & semua bahasa' },
      { icon: '🌐', name: 'Web Development', desc: 'HTML, CSS, React, Laravel, Node.js' },
      { icon: '📱', name: 'Aplikasi Mobile', desc: 'Flutter, Android, iOS development' },
      { icon: '🗃️', name: 'Database / SQL', desc: 'MySQL, PostgreSQL, MongoDB, ERD' },
      { icon: '🤖', name: 'Machine Learning / AI', desc: 'TensorFlow, dataset, model ML' },
      { icon: '🔧', name: 'Sistem Informasi', desc: 'Analisis sistem, flowchart, DFD' },
    ]
  },
  {
    cat: '🎨 Desain & Multimedia',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    items: [
      { icon: '🎬', name: 'Video Editing', desc: 'Premiere Pro, CapCut, After Effects' },
      { icon: '📐', name: 'Blender 3D', desc: 'Modeling, render, animasi 3D' },
      { icon: '🖼️', name: 'Desain Grafis', desc: 'Photoshop, Illustrator, Canva' },
      { icon: '🎞️', name: 'Animasi / Motion', desc: 'Animasi 2D, 3D, infografis' },
      { icon: '📊', name: 'Presentasi PPT', desc: 'Desain slide profesional & menarik' },
      { icon: '🎵', name: 'Editing Audio', desc: 'Podcast, musik, voiceover' },
    ]
  },
  {
    cat: '📝 Karya Tulis Ilmiah',
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    items: [
      { icon: '📄', name: 'Makalah', desc: 'Semua topik, format standar akademik' },
      { icon: '🎓', name: 'Skripsi / Thesis', desc: 'S1, S2, S3 — semua jurusan' },
      { icon: '📋', name: 'Laporan Magang (PKL)', desc: 'Laporan PKL lengkap & profesional' },
      { icon: '🔬', name: 'Laporan Praktikum', desc: 'Semua mata kuliah praktikum' },
      { icon: '📰', name: 'Artikel / Jurnal', desc: 'Ilmiah, populer, SEO artikel' },
      { icon: '✍️', name: 'Essay / Paper', desc: 'Argument essay, analytical paper' },
    ]
  },
  {
    cat: '📊 Sains & Hitungan',
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    items: [
      { icon: '🔢', name: 'Matematika', desc: 'Kalkulus, statistik, aljabar linear' },
      { icon: '⚗️', name: 'Fisika & Kimia', desc: 'Soal hitungan, laporan eksp.' },
      { icon: '💰', name: 'Akuntansi', desc: 'Laporan keuangan, jurnal, neraca' },
      { icon: '📈', name: 'Statistika / SPSS', desc: 'Olah data, uji hipotesis, SPSS' },
      { icon: '🌍', name: 'Ekonomi', desc: 'Mikro, makro, ekonometrika' },
      { icon: '📉', name: 'Manajemen', desc: 'Bisnis plan, studi kasus, analisis' },
    ]
  },
  {
    cat: '📚 Tugas Umum',
    color: '#DC2626',
    bg: 'rgba(220,38,38,0.08)',
    items: [
      { icon: '❓', name: 'Kuis / UTS / UAS', desc: 'Pengerjaan soal ujian online' },
      { icon: '🧑‍💼', name: 'Tugas Karyawan', desc: 'Laporan kerja, proposal, memo' },
      { icon: '🏫', name: 'Tugas SMA / SMK', desc: 'Semua mata pelajaran SMA/SMK' },
      { icon: '🗣️', name: 'Bahasa Inggris', desc: 'Essay, terjemahan, speaking task' },
      { icon: '⚖️', name: 'Hukum / Psikologi', desc: 'Analisis kasus, makalah hukum' },
      { icon: '📅', name: 'Diskusi Kuliah', desc: 'Balasan diskusi forum daring' },
    ]
  },
]

export default function Services({ waLink }: ServicesProps) {
  return (
    <section id="layanan" style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">🛠️ Layanan Kami</div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '1rem',
          }}>
            Semua Tugas? <span style={{ color: 'var(--indigo)' }}>Bisa.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '550px', margin: '0 auto' }}>
            Dari coding hingga video editing, dari makalah hingga skripsi — tim ahli kami siap mengerjakan semua jenis tugas kuliah, SMA, maupun pekerjaan kamu.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {serviceCategories.map((cat) => (
            <div key={cat.cat} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '1.5rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-4px)'
              el.style.boxShadow = 'var(--shadow-hover)'
              el.style.borderColor = cat.color + '40'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
              el.style.borderColor = 'var(--border)'
            }}
            >
              {/* Category header */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: cat.bg,
                color: cat.color,
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '100px',
                marginBottom: '1.25rem',
              }}>
                {cat.cat}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {cat.items.map(item => (
                  <div key={item.name} style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '0.75rem',
                    transition: 'all 0.2s',
                  }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{item.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>{item.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA below services */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
            Tidak menemukan tugas kamu di sini? Jangan khawatir — konsultasikan langsung!
          </p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Tanya Langsung via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

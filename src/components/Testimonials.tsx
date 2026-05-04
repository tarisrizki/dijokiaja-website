const testimonials = [
  {
    name: 'Rizky Aditya',
    role: 'Mahasiswa S1 Teknik Informatika',
    avatar: 'RA',
    rating: 5,
    text: 'Udah 3x order tugas coding di Dijokiaja dan selalu puas! Coding Python yang bikin pusing langsung beres dalam 5 jam. Nilainya A semua. Recommended banget buat anak IT!',
    tag: 'Coding Python',
    color: '#4F46E5',
  },
  {
    name: 'Sari Dewi',
    role: 'Mahasiswi S1 Komunikasi',
    avatar: 'SD',
    rating: 5,
    text: 'Skripsi aku bantuin sampai selesai! Timnya profesional banget, revisi cepet, dan hasilnya memuaskan. Akhirnya bisa sidang dan lulus tepat waktu. Makasih Dijokiaja 🙏',
    tag: 'Skripsi',
    color: '#7C3AED',
  },
  {
    name: 'Budi Santoso',
    role: 'Karyawan Swasta',
    avatar: 'BS',
    rating: 5,
    text: 'Kerja sambil kuliah itu berat banget. Laporan magang dan tugas kuliah numpuk. Dijokiaja penyelamat hidup! Harga reasonable, kerjanya cepet, privasi aman. 10/10!',
    tag: 'Laporan Magang',
    color: '#059669',
  },
  {
    name: 'Putri Maharani',
    role: 'Siswi SMA Kelas 12',
    avatar: 'PM',
    rating: 5,
    text: 'Deadline tugas video sekolah tinggal 2 jam, panik banget! Langsung WA Dijokiaja dan mereka langsung handle. Hasilnya keren banget, guru pun muji. Recommended!',
    tag: 'Video Editing',
    color: '#F97316',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Mahasiswa S2 Manajemen',
    avatar: 'AF',
    rating: 5,
    text: 'Tugas analisis data SPSS yang bikin stress langsung beres dengan hasil yang bisa aku pahami. Dijelasin cara bacanya juga. Sangat membantu untuk pemahaman materi.',
    tag: 'SPSS & Statistik',
    color: '#D97706',
  },
  {
    name: 'Nadia Fitri',
    role: 'Mahasiswi D3 Desain',
    avatar: 'NF',
    rating: 5,
    text: 'Tugas Blender 3D yang complicated dikerjain dengan sangat baik. Modelingnya detail dan rendernya bagus. Dosen sampe tanya bikin sendiri atau pake software apa haha. Mantap!',
    tag: 'Blender 3D',
    color: '#EF4444',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#F59E0B', fontSize: '0.9rem' }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimoni" style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">⭐ Testimoni</div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '0.75rem',
          }}>
            Kata Mereka yang Udah Pake
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto', fontSize: '1rem' }}>
            Ratusan pelanggan sudah mempercayakan tugasnya kepada Dijokiaja. Ini cerita mereka.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '1.5rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-4px)'
              el.style.boxShadow = 'var(--shadow-hover)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute', top: '1rem', right: '1.25rem',
                fontSize: '4rem', color: t.color + '15',
                fontFamily: 'serif', lineHeight: 1, userSelect: 'none',
              }}>"</div>

              {/* Rating + tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <StarRating count={t.rating} />
                <span style={{
                  background: t.color + '15',
                  color: t.color,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '100px',
                }}>{t.tag}</span>
              </div>

              {/* Text */}
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
                fontStyle: 'italic',
              }}>"{t.text}"</p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '40px', height: '40px',
                  borderRadius: '50%',
                  background: t.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  flexShrink: 0,
                }}>{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div style={{
          textAlign: 'center',
          marginTop: '2.5rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(249,115,22,0.06) 100%)',
          borderRadius: '16px',
          border: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: '2.5rem', fontFamily: 'Syne, sans-serif', fontWeight: 800, color: 'var(--text-primary)' }}>5.0 / 5.0</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', margin: '0.4rem 0' }}>
            {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#F59E0B', fontSize: '1.5rem' }}>★</span>)}
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Dari 100+ pelanggan puas yang telah menggunakan layanan Dijokiaja</p>
        </div>
      </div>
    </section>
  )
}

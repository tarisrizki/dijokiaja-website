const features = [
  { icon: '⚡', title: 'Cepat & Tepat Waktu', desc: 'Deadline mepet 2 jam pun kami siap! Pengerjaan kilat tanpa mengorbankan kualitas.', color: '#F97316' },
  { icon: '🔒', title: 'Privasi Terjamin', desc: 'Data dan identitas kamu aman 100%. Tidak akan bocor ke pihak mana pun. Garansi!', color: '#4F46E5' },
  { icon: '🎯', title: 'Nilai A Terjamin', desc: 'Tim kami lulusan kampus terbaik. Tugas dikerjakan professional dan berstandar tinggi.', color: '#10B981' },
  { icon: '💸', title: 'Harga Terjangkau', desc: 'Harga bersahabat untuk kantong pelajar dan mahasiswa. Bisa nego dan ada promo member!', color: '#8B5CF6' },
  { icon: '🔄', title: 'Revisi Gratis', desc: 'Tidak puas dengan hasilnya? Tenang, kami sediakan revisi gratis 1×24 jam.', color: '#EF4444' },
  { icon: '🌙', title: 'Layanan 24 Jam', desc: 'Tim kami aktif 24 jam penuh, 7 hari seminggu. Kapan pun kamu butuh, kami siap!', color: '#06B6D4' },
  { icon: '📋', title: 'Anti Plagiat', desc: 'Semua karya tulis kami original, tidak copy-paste, dan lolos cek turnitin/plagscan.', color: '#D97706' },
  { icon: '🎓', title: 'Semua Jenjang', desc: 'Mulai dari tugas SMA/SMK, D3, S1, S2, S3, hingga tugas karyawan — semua kami layani.', color: '#7C3AED' },
]

export default function WhyUs() {
  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">💎 Keunggulan</div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '0.75rem',
          }}>
            Kenapa Pilih <span style={{ color: 'var(--indigo)' }}>Dijokiaja?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', fontSize: '1rem' }}>
            Bukan sekadar joki — kami adalah mitra terpercaya yang peduli kualitas dan kepuasanmu.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-4px)'
              el.style.borderColor = f.color + '50'
              el.style.boxShadow = `0 8px 30px ${f.color}18`
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(0)'
              el.style.borderColor = 'var(--border)'
              el.style.boxShadow = 'none'
            }}
            >
              <div style={{
                width: '48px', height: '48px',
                borderRadius: '12px',
                background: f.color + '15',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
              }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.4rem',
                }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

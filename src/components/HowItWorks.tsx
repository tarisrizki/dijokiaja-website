interface HowItWorksProps {
  waLink: string
}

const steps = [
  {
    num: '01',
    icon: '💬',
    title: 'Chat WhatsApp',
    desc: 'Hubungi kami via WhatsApp. Ceritakan detail tugas kamu: jenis tugas, deadline, dan instruksi dari dosen/guru.',
    color: '#4F46E5',
  },
  {
    num: '02',
    icon: '🤝',
    title: 'Sepakati & Bayar DP',
    desc: 'Kami beri estimasi harga sesuai tingkat kesulitan. Setuju? Bayar DP 50% dan tim langsung mulai mengerjakan.',
    color: '#F97316',
  },
  {
    num: '03',
    icon: '🎉',
    title: 'Terima Tugas Selesai',
    desc: 'Tugas kamu selesai tepat waktu, berkualitas, dan siap dikumpulkan! Ada revisi gratis jika diperlukan.',
    color: '#10B981',
  },
]

export default function HowItWorks({ waLink }: HowItWorksProps) {
  return (
    <section id="cara-kerja" style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">⚡ Cara Kerja</div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '0.75rem',
          }}>
            3 Langkah Gampang
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto', fontSize: '1rem' }}>
            Proses pesan tugas di Dijokiaja sangat mudah — tidak ribet, tidak berbelit-belit.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          position: 'relative',
        }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '50px',
            left: '20%',
            right: '20%',
            height: '2px',
            background: 'linear-gradient(90deg, #4F46E5, #F97316, #10B981)',
            opacity: 0.25,
          }}/>

          {steps.map((step, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '2rem 1.75rem',
              textAlign: 'center',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-6px)'
              el.style.borderColor = step.color + '50'
              el.style.boxShadow = `0 16px 40px ${step.color}20`
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(0)'
              el.style.borderColor = 'var(--border)'
              el.style.boxShadow = 'none'
            }}
            >
              {/* Step number badge */}
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: step.color,
                color: 'white',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '0.8rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '100px',
                letterSpacing: '0.05em',
              }}>{step.num}</div>

              {/* Icon */}
              <div style={{
                width: '72px', height: '72px',
                borderRadius: '20px',
                background: step.color + '15',
                border: `2px solid ${step.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.25rem',
              }}>
                {step.icon}
              </div>

              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>
            🚀 Mulai Order Sekarang
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > .container > div:last-of-type { grid-template-columns: 1fr !important; }
          section > .container > div:last-of-type > div[style*="position: absolute"] { display: none; }
        }
      `}</style>
    </section>
  )
}

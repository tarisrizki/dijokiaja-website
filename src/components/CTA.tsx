interface CTAProps {
  waLink: string
}

export default function CTA({ waLink }: CTAProps) {
  return (
    <section style={{
      padding: '5rem 0',
      background: 'var(--grad-brand)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-100px',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: '300px', height: '300px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)',
        pointerEvents: 'none',
      }}/>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          fontSize: '3.5rem',
          marginBottom: '1rem',
          animation: 'float 3s ease-in-out infinite',
        }}>🚀</div>

        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: 'white',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}>
          Jangan Biarkan Tugas<br/>Menguras Energimu!
        </h2>

        <p style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: '1.05rem',
          maxWidth: '500px',
          margin: '0 auto 2rem',
          lineHeight: 1.7,
        }}>
          Percayakan tugasmu ke Dijokiaja. Tim profesional kami siap membantu kamu mendapat nilai terbaik — cepat, aman, dan terjangkau!
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <a href={waLink} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.7rem',
            background: '#25D366',
            color: 'white',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 700,
            fontSize: '1.05rem',
            padding: '1rem 2.5rem',
            borderRadius: '100px',
            textDecoration: 'none',
            boxShadow: '0 6px 30px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 10px 40px rgba(37, 211, 102, 0.5)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 30px rgba(37, 211, 102, 0.4)'
          }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat WhatsApp Sekarang
          </a>

          <a href="#layanan" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(255,255,255,0.15)',
            color: 'white',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 700,
            fontSize: '1.05rem',
            padding: '1rem 2rem',
            borderRadius: '100px',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'}
          >
            Lihat Semua Layanan
          </a>
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          gap: '1rem', marginTop: '2.5rem',
        }}>
          {['✅ Terpercaya Sejak 2023', '🔒 Data 100% Aman', '⚡ Cepat & Berkualitas', '💬 WA Aktif 24 Jam'].map(badge => (
            <span key={badge} style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '0.82rem',
              fontWeight: 600,
              background: 'rgba(255,255,255,0.1)',
              padding: '0.35rem 0.85rem',
              borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.2)',
            }}>{badge}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

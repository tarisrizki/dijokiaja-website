const stats = [
  { value: '2023', label: 'Berdiri Sejak', icon: '🏆' },
  { value: '1000+', label: 'Tugas Diselesaikan', icon: '✅' },
  { value: '24 Jam', label: 'Siap Melayani', icon: '🕐' },
  { value: '100%', label: 'Jaga Privasi', icon: '🔒' },
]

export default function Stats() {
  return (
    <section style={{
      background: 'var(--grad-brand)',
      padding: '3rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
        pointerEvents: 'none',
      }}/>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          textAlign: 'center',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              color: 'white',
              padding: '1rem',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
            }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{s.icon}</div>
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 800,
                marginBottom: '0.25rem',
              }}>{s.value}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          section > .container > div { grid-template-columns: repeat(2, 1fr) !important; }
          section > .container > div > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.15); }
        }
      `}</style>
    </section>
  )
}

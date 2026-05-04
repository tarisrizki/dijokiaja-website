import Logo from './Logo'

interface FooterProps {
  waLink: string
}

export default function Footer({ waLink }: FooterProps) {
  const year = new Date().getFullYear()

  const services = ['Joki Coding', 'Joki Makalah', 'Joki Skripsi', 'Joki Video', 'Joki Blender 3D', 'Joki Tugas SMA']
  const quickLinks = ['Layanan', 'Cara Kerja', 'Testimoni', 'FAQ']

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 0 1.25rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '2rem',
          marginBottom: '1.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Logo size={32} />
              <span style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '1.2rem',
                background: 'var(--grad-brand)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Dijokiaja</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.65, maxWidth: '280px', marginBottom: '0.75rem' }}>
              Solusi tugas terpercaya untuk mahasiswa, pelajar SMA, dan karyawan. Berdiri sejak 2023. Semua tugas bisa!
            </p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              color: '#25D366', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              0881082397879
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Menu</h4>
            {quickLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} style={{
                display: 'block',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                marginBottom: '0.4rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--indigo)'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-muted)'}
              >{link}</a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Layanan</h4>
            {services.map(s => (
              <a key={s} href={waLink} target="_blank" rel="noopener noreferrer" style={{
                display: 'block',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                marginBottom: '0.4rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--indigo)'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-muted)'}
              >{s}</a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            © {year} Dijokiaja. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            Terpercaya Sejak 2023 · Semua Tugas Bisa ✅
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

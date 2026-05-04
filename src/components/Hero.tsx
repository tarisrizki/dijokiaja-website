interface HeroProps {
  waLink: string
}

function MascotIllustration() {
  return (
    <svg viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '460px' }}>
      <defs>
        <linearGradient id="heroGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F46E5"/>
          <stop offset="100%" stopColor="#7C3AED"/>
        </linearGradient>
        <linearGradient id="heroGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F97316"/>
          <stop offset="100%" stopColor="#EF4444"/>
        </linearGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E1B4B"/>
          <stop offset="100%" stopColor="#312E81"/>
        </linearGradient>
        <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#4F46E5" floodOpacity="0.25"/>
        </filter>
        <filter id="shadow2">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.2"/>
        </filter>
      </defs>

      {/* BG decorative circles */}
      <circle cx="210" cy="190" r="160" fill="rgba(79,70,229,0.06)"/>
      <circle cx="210" cy="190" r="120" fill="rgba(79,70,229,0.04)"/>

      {/* LAPTOP BASE */}
      <rect x="60" y="240" width="300" height="14" rx="7" fill="#CBD5E1" filter="url(#shadow2)"/>
      <rect x="80" y="130" width="260" height="115" rx="12" fill="url(#heroGrad1)" filter="url(#shadow1)"/>
      {/* Screen */}
      <rect x="88" y="138" width="244" height="99" rx="8" fill="url(#screenGrad)"/>

      {/* Code on screen */}
      <rect x="96" y="148" width="80" height="5" rx="2.5" fill="#6366F1" opacity="0.7"/>
      <rect x="96" y="160" width="120" height="4" rx="2" fill="#A5B4FC" opacity="0.5"/>
      <rect x="108" y="170" width="90" height="4" rx="2" fill="#34D399" opacity="0.6"/>
      <rect x="108" y="180" width="70" height="4" rx="2" fill="#F87171" opacity="0.5"/>
      <rect x="96" y="190" width="100" height="4" rx="2" fill="#A5B4FC" opacity="0.5"/>
      <rect x="108" y="200" width="60" height="4" rx="2" fill="#34D399" opacity="0.6"/>
      <rect x="96" y="210" width="80" height="4" rx="2" fill="#6366F1" opacity="0.7"/>

      {/* Checkmark overlay on screen */}
      <circle cx="270" cy="178" r="28" fill="url(#heroGrad2)" opacity="0.92"/>
      <path d="M258 178l8 9 16-18" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Keyboard */}
      <rect x="80" y="245" width="260" height="4" rx="2" fill="#94A3B8"/>

      {/* FLOATING CARDS */}
      {/* Card 1 - left */}
      <g filter="url(#shadow2)" style={{ animation: 'float 3.5s ease-in-out infinite' }}>
        <rect x="18" y="155" width="80" height="52" rx="10" fill="white"/>
        <rect x="18" y="155" width="80" height="52" rx="10" fill="rgba(79,70,229,0.04)"/>
        <circle cx="36" cy="170" r="8" fill="rgba(79,70,229,0.15)"/>
        <text x="36" y="174" textAnchor="middle" fontSize="10" fill="#4F46E5">📝</text>
        <rect x="50" y="164" width="38" height="4" rx="2" fill="#4F46E5" opacity="0.6"/>
        <rect x="50" y="172" width="28" height="3" rx="1.5" fill="#94A3B8" opacity="0.6"/>
        <rect x="28" y="183" width="60" height="14" rx="7" fill="url(#heroGrad2)"/>
        <text x="58" y="194" textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily="Plus Jakarta Sans">SELESAI ✓</text>
      </g>

      {/* Card 2 - right */}
      <g filter="url(#shadow2)">
        <rect x="322" y="148" width="84" height="58" rx="10" fill="white"/>
        <rect x="322" y="148" width="84" height="58" rx="10" fill="rgba(249,115,22,0.04)"/>
        <circle cx="342" cy="166" r="9" fill="rgba(249,115,22,0.15)"/>
        <text x="342" y="170" textAnchor="middle" fontSize="11" fill="#F97316">⭐</text>
        <rect x="357" y="160" width="38" height="4" rx="2" fill="#F97316" opacity="0.7"/>
        <rect x="357" y="168" width="28" height="3" rx="1.5" fill="#94A3B8" opacity="0.6"/>
        <rect x="330" y="179" width="68" height="18" rx="9" fill="url(#heroGrad1)"/>
        <text x="364" y="192" textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily="Plus Jakarta Sans">NILAI A+ 🎉</text>
      </g>

      {/* Card 3 - bottom */}
      <g filter="url(#shadow2)">
        <rect x="130" y="290" width="160" height="48" rx="10" fill="white"/>
        <circle cx="152" cy="314" r="10" fill="rgba(37,211,102,0.15)"/>
        <text x="152" y="318" textAnchor="middle" fontSize="13" fill="#25D366">✓</text>
        <rect x="168" y="307" width="70" height="5" rx="2.5" fill="#1A202C" opacity="0.7"/>
        <rect x="168" y="317" width="50" height="4" rx="2" fill="#94A3B8" opacity="0.6"/>
        <rect x="168" y="325" width="40" height="4" rx="2" fill="#94A3B8" opacity="0.4"/>
      </g>

      {/* MASCOT CHARACTER - graduation cap person */}
      <circle cx="130" cy="82" r="34" fill="#FDE68A"/>
      {/* Face */}
      <circle cx="122" cy="84" r="3.5" fill="#1A202C"/>
      <circle cx="138" cy="84" r="3.5" fill="#1A202C"/>
      <path d="M122 95 Q130 102 138 95" stroke="#1A202C" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Graduation cap */}
      <path d="M100 72 L130 60 L160 72 L130 84z" fill="#4F46E5"/>
      <rect x="126" y="60" width="8" height="4" rx="2" fill="#4F46E5"/>
      <rect x="127.5" y="59" width="5" height="16" rx="2.5" fill="#7C3AED"/>
      <circle cx="127.5" cy="76" r="3" fill="#F97316"/>
      {/* Body */}
      <rect x="110" y="114" width="40" height="28" rx="10" fill="#4F46E5"/>
      {/* Arms holding laptop */}
      <path d="M110 120 Q90 130 82 145" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round"/>
      <path d="M150 120 Q170 130 178 145" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round"/>

      {/* Stars decoration */}
      <text x="350" y="80" fontSize="20" fill="#F97316" opacity="0.8">✦</text>
      <text x="30" y="110" fontSize="14" fill="#6366F1" opacity="0.7">✦</text>
      <text x="380" y="230" fontSize="12" fill="#34D399" opacity="0.7">★</text>
      <text x="10" y="280" fontSize="16" fill="#F97316" opacity="0.5">★</text>
    </svg>
  )
}

export default function Hero({ waLink }: HeroProps) {
  return (
    <section style={{
      background: 'var(--grad-hero)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      paddingBottom: '4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '-200px', right: '-200px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-100px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }}/>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gap: '3rem',
        }}>
          {/* LEFT TEXT */}
          <div style={{ animation: 'fadeUp 0.7s ease both' }}>
            <div className="section-label">
              🎓 Jasa Joki Tugas Terpercaya Sejak 2023
            </div>
            <h1 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
            }}>
              Jasa Joki Tugas{' '}
              <span style={{
                background: 'var(--grad-brand)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Serahin ke Kami!</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
              maxWidth: '480px',
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>Dijokiaja</strong> adalah jasa joki tugas untuk mahasiswa, pelajar SMA, dan karyawan. Kami tangani semua jenis tugas — cepat, berkualitas, rahasia, dan aman. 💪
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
              {['✅ Anti Plagiat', '🔒 100% Rahasia', '⚡ Deadline Mepet Bisa', '🌙 24 Jam Siap'].map(tag => (
                <span key={tag} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  padding: '0.3rem 0.8rem',
                  borderRadius: '100px',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ fontSize: '1.05rem', padding: '1rem 2.2rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Konsultasi Gratis
              </a>
              <a href="#layanan" style={{
                color: 'var(--indigo)',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.95rem',
              }}>
                Lihat Layanan ↓
              </a>
            </div>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div style={{ display: 'flex', justifyContent: 'center', animation: 'float 4s ease-in-out infinite' }}>
            <MascotIllustration />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > .container > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          section > .container > div > div:last-child {
            display: none;
          }
          section > .container > div > div:first-child > div[style*="justify-content"] {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

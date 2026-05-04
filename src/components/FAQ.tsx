import { useState } from 'react'

const faqs = [
  {
    q: 'Apa itu jasa joki tugas Dijokiaja?',
    a: 'Jasa joki tugas Dijokiaja adalah layanan bantuan pengerjaan tugas untuk kuliah, SMA, dan karyawan. Kami fokus pada hasil yang cepat, rapi, aman, dan tetap menjaga kerahasiaan pelanggan.',
  },
  {
    q: 'Apakah tugas saya benar-benar aman dan tidak akan ketahuan?',
    a: 'Tentu! Privasi adalah prioritas utama kami. Data kamu sepenuhnya rahasia dan kami tidak akan membocorkan informasi apapun. Kami juga tidak pernah membagikan tugas ke pihak lain. Sudah ratusan pelanggan yang aman dan puas.',
  },
  {
    q: 'Berapa lama pengerjaan tugas?',
    a: 'Waktu pengerjaan bervariasi tergantung tingkat kesulitan. Untuk tugas ringan bisa 2–5 jam. Tugas sedang 1–2 hari. Skripsi atau proyek besar bisa 1–2 minggu. Deadline mepet? Kami punya layanan express, tinggal chat kami!',
  },
  {
    q: 'Apakah ada garansi nilai/revisi?',
    a: 'Ya! Kami memberikan garansi revisi gratis 1×24 jam setelah tugas dikirim. Untuk karya tulis, kami jamin original (anti plagiat). Jika ada yang kurang sesuai instruksi, kami wajib memperbaikinya.',
  },
  {
    q: 'Bagaimana sistem pembayarannya?',
    a: 'Sistem DP (Down Payment) 50% di awal sebelum pengerjaan dimulai, dan sisanya setelah tugas selesai dan kamu puas. Pembayaran bisa via transfer bank (BCA, Mandiri, BNI, dll), DANA, OVO, GoPay, atau QRIS.',
  },
  {
    q: 'Apakah bisa tugas untuk karyawan/pekerja?',
    a: 'Bisa banget! Kami tidak hanya melayani pelajar dan mahasiswa. Karyawan yang kuliah sambil kerja, atau butuh bantuan laporan kerja, proposal proyek, dll — semuanya bisa kami bantu!',
  },
  {
    q: 'Apa saja yang tidak bisa dikerjakan?',
    a: 'Hampir tidak ada batasan! Jika kamu ragu apakah tugas kamu bisa kami kerjakan, langsung saja tanyakan via WhatsApp. Tim kami akan memberikan jawaban jujur apakah tugas tersebut bisa kami handle atau tidak.',
  },
  {
    q: 'Apakah ada diskon atau promo?',
    a: 'Ada! Pelanggan yang sering order atau berlangganan akan mendapatkan harga spesial. Kami juga sering memberikan promo di waktu-waktu tertentu. Chat kami untuk info promo terkini!',
  },
]

function FAQItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      borderColor: isOpen ? 'var(--indigo)' : 'var(--border)',
    }}>
      <button
        onClick={toggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.1rem 1.25rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span style={{
          fontWeight: 700,
          fontSize: '0.95rem',
          color: isOpen ? 'var(--indigo)' : 'var(--text-primary)',
          lineHeight: 1.4,
          transition: 'color 0.2s',
        }}>{q}</span>
        <span style={{
          flexShrink: 0,
          width: '28px', height: '28px',
          borderRadius: '50%',
          background: isOpen ? 'var(--indigo)' : 'var(--bg-primary)',
          border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: isOpen ? 'white' : 'var(--text-muted)',
          fontSize: '1.1rem',
          fontWeight: 700,
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>+</span>
      </button>
      {isOpen && (
        <div style={{
          padding: '0 1.25rem 1.25rem',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          lineHeight: 1.75,
          borderTop: '1px solid var(--border)',
          paddingTop: '1rem',
        }}>
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">❓ FAQ</div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '0.75rem',
          }}>
            Pertanyaan yang Sering Ditanya
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto', fontSize: '1rem' }}>
            Masih ada pertanyaan lain? Langsung chat kami di WhatsApp!
          </p>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

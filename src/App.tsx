import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWA from './components/FloatingWA'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const WA_NUMBER = '0881082397879'
  const WA_LINK = `https://wa.me/62${WA_NUMBER.replace(/^0/, '')}?text=Halo%20Dijokiaja!%20Saya%20mau%20konsultasi%20tugas%20saya%20🙏`

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh', transition: 'background 0.3s, color 0.3s' }}>
      <Header darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} waLink={WA_LINK} />
      <main>
        <Hero waLink={WA_LINK} />
        <Stats />
        <Services waLink={WA_LINK} />
        <HowItWorks waLink={WA_LINK} />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTA waLink={WA_LINK} />
      </main>
      <Footer waLink={WA_LINK} />
      <FloatingWA waLink={WA_LINK} />
    </div>
  )
}

export default App

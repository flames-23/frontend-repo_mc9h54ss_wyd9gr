import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Destinations, Packages, Testimonials, Contact } from './components/Sections'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      const href = target.getAttribute('href')
      if (href.length > 1) {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

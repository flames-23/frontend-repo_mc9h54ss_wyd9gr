import { useEffect, useState } from 'react'
import { Menu, X, Plane, MapPin, Gift, MessageSquare, Phone } from 'lucide-react'

const links = [
  { href: '#destinations', label: 'Destinations' },
  { href: '#packages', label: 'Packages' },
  { href: '#testimonials', label: 'Stories' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white font-semibold">
          <Plane className="w-6 h-6 text-orange-400" />
          TourFlow
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#packages" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold px-4 py-2 rounded-full shadow hover:shadow-lg transition-all">
            <Gift className="w-4 h-4" /> Book now
          </a>
        </div>
        <button aria-label="Menu" className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-white/90" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#packages" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold px-4 py-2 rounded-full shadow">
              <Phone className="w-4 h-4" /> Book now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

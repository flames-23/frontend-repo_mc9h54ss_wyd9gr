import { motion } from 'framer-motion'
import { MapPin, Camera, Star, CheckCircle2 } from 'lucide-react'

export function Destinations() {
  const items = [
    { title: 'Kyoto, Japan', desc: 'Temples, tea houses, and tranquil gardens', img: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Amalfi, Italy', desc: 'Cliffside villages and turquoise seas', img: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Iceland', desc: 'Waterfalls, glaciers, and northern lights', img: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf4e?q=80&w=1600&auto=format&fit=crop' },
  ]
  return (
    <section id="destinations" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold text-white">Popular destinations</motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img src={item.img} alt={item.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Packages() {
  const tiers = [
    { name: 'Explorer', price: 799, perks: ['3 nights stay', 'City highlights tour', 'Local guide'], best: false },
    { name: 'Adventurer', price: 1499, perks: ['6 nights stay', 'Multi-city tour', 'Premium support'], best: true },
    { name: 'Luxury', price: 2999, perks: ['7 nights stay', 'Private tours', '5-star hotels'], best: false },
  ]
  return (
    <section id="packages" className="relative py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold text-white">Packages</motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className={`rounded-2xl p-6 border ${t.best ? 'bg-gradient-to-b from-amber-500/10 to-transparent border-amber-400/30' : 'border-white/10 bg-white/5'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-white text-xl font-semibold">{t.name}</h3>
                {t.best && <span className="text-amber-400 text-sm">Most popular</span>}
              </div>
              <div className="mt-4 text-4xl font-extrabold text-white">${t.price}<span className="text-base text-white/70">/person</span></div>
              <ul className="mt-6 space-y-3">
                {t.perks.map(p => (
                  <li key={p} className="flex items-center gap-2 text-white/90"><CheckCircle2 className="w-4 h-4 text-amber-400" /> {p}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex justify-center w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold shadow hover:shadow-lg transition">Choose {t.name}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const items = [
    { name: 'Ava', text: 'Flawless experience. The itinerary was perfect and the guides were amazing.', rating: 5 },
    { name: 'Leo', text: 'Loved the small details. Transfers and hotels were top-notch.', rating: 5 },
    { name: 'Mia', text: 'Great value and smooth booking. Definitely coming back for more!', rating: 5 },
  ]
  return (
    <section id="testimonials" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold text-white">Traveler stories</motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
              </div>
              <p className="mt-4 text-white/90">“{t.text}”</p>
              <p className="mt-4 text-white/60 text-sm">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-zinc-900 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold text-white">Contact us</motion.h2>
        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-amber-500" />
          <input placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-amber-500" />
          <textarea rows={5} placeholder="Message" className="md:col-span-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-amber-500" />
          <button type="button" className="md:col-span-2 inline-flex justify-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold shadow hover:shadow-lg transition">
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  )
}

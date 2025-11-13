export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© 2025 TourFlow. All rights reserved.</p>
        <div className="text-white/60 text-sm flex gap-4">
          <a href="#top" className="hover:text-white">Top</a>
          <a href="#packages" className="hover:text-white">Packages</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

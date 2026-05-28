import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="font-serif tracking-wide">
          The Blue Heron
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/menu" className="hover:text-amber-400 transition">
            Menu
          </Link>
          <Link href="/about" className="hover:text-amber-400 transition">
            About
          </Link>
          <Link
            href="/reservations"
            className="border border-amber-500 px-4 py-2 hover:bg-amber-500 hover:text-black transition"
          >
            Reserve
          </Link>
        </div>
      </div>
    </nav>
  )
}

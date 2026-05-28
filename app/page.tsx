import Link from 'next/link'
import HeroCarousel from '../components/HeroCarousel'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <HeroCarousel />

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-amber-400 mb-6">
            Black Hills Dining Experience
          </p>

          <h1 className="text-6xl md:text-8xl font-serif mb-8">
            The Blue Heron
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 mb-10">
            Elevated dining rooted in the spirit of the Black Hills.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/reservations"
              className="border border-amber-500 px-6 py-3 hover:bg-amber-500 hover:text-black transition"
            >
              Reserve
            </Link>

            <Link
              href="/menu"
              className="border border-zinc-700 px-6 py-3 hover:border-white transition"
            >
              View Menus
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 px-6 py-24 text-center">
        <p className="uppercase tracking-[0.3em] text-amber-400 mb-4">
          Reservations
        </p>
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Join us for dinner
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
          Tables are limited and book quickly. Reserve through our booking
          partner to secure your evening in the Black Hills.
        </p>
        <Link
          href="/reservations"
          className="inline-block border border-amber-500 px-8 py-3 hover:bg-amber-500 hover:text-black transition"
        >
          Reserve a Table
        </Link>
      </section>
    </main>
  )
}

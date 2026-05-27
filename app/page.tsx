import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <video
          className="hero-video opacity-40"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

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
    </main>
  )
}

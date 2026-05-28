import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <p className="uppercase tracking-[0.3em] text-amber-400 mb-4">About</p>
      <h1 className="text-5xl font-serif mb-12">Our Story</h1>

      <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
        <p>
          The Blue Heron is an elevated dining room rooted in the landscape and
          larder of the Black Hills. Placeholder copy — replace with the
          restaurant&apos;s story, chef background, and sourcing philosophy.
        </p>
        <p>
          Our kitchen works closely with regional ranchers, foragers, and
          growers to build a menu that changes with the seasons.
        </p>
      </div>

      <Link
        href="/reservations"
        className="inline-block mt-12 border border-amber-500 px-8 py-3 hover:bg-amber-500 hover:text-black transition"
      >
        Reserve a Table
      </Link>
    </main>
  )
}

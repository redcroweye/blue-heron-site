import Link from 'next/link'

const services = [
  {
    slug: 'dinner',
    name: 'Dinner',
    desc: 'Our seasonal evening menu of à la carte and shared plates.',
  },
  {
    slug: 'brunch',
    name: 'Brunch',
    desc: 'Weekend brunch served Saturday and Sunday.',
  },
  {
    slug: 'drinks',
    name: 'Drinks',
    desc: 'Cocktails, regional wine, and zero-proof options.',
  },
]

export default function MenuPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <p className="uppercase tracking-[0.3em] text-amber-400 mb-4">Menus</p>
      <h1 className="text-5xl font-serif mb-12">Seasonal Menus</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/menu/${service.slug}`}
            className="block border border-zinc-800 rounded-2xl p-8 hover:border-amber-500 transition"
          >
            <h2 className="text-2xl font-serif mb-3">{service.name}</h2>
            <p className="text-zinc-400">{service.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

import Link from 'next/link'

const sections = [
  {
    name: 'First Course',
    items: [
      { name: 'Heirloom Beet Salad', desc: 'Whipped chèvre, candied walnut', price: '$16' },
      { name: 'Bison Tartare', desc: 'Cured yolk, juniper, rye crisp', price: '$19' },
    ],
  },
  {
    name: 'Mains',
    items: [
      { name: 'Smoked Ribeye', desc: 'Black Hills beef, bone marrow butter', price: '$48' },
      { name: 'Pan-Roasted Trout', desc: 'Brown butter, almond, charred lemon', price: '$36' },
    ],
  },
]

export default function DinnerMenu() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <p className="uppercase tracking-[0.3em] text-amber-400 mb-4">Menus</p>
      <h1 className="text-5xl font-serif mb-12">Dinner</h1>

      <div className="space-y-12">
        {sections.map((section) => (
          <section key={section.name}>
            <h2 className="text-3xl font-serif mb-6">{section.name}</h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-zinc-800 pb-4 flex justify-between gap-6"
                >
                  <div>
                    <h3 className="text-lg">{item.name}</h3>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-amber-400">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="text-zinc-600 text-sm mt-16">
        Placeholder menu — replace with current dinner offerings.
      </p>

      <Link
        href="/menu"
        className="inline-block mt-8 text-zinc-400 hover:text-amber-400 transition"
      >
        ← All menus
      </Link>
    </main>
  )
}

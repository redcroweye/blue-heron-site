export default function MenuPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-5xl mb-12">Seasonal Menus</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl mb-4">Dinner</h2>
          <div className="border-b border-zinc-800 pb-4 mb-4">
            <div className="flex justify-between">
              <span>Smoked Ribeye</span>
              <span>$48</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl mb-4">Cocktails</h2>
          <div className="border-b border-zinc-800 pb-4 mb-4">
            <div className="flex justify-between">
              <span>Heron Old Fashioned</span>
              <span>$16</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

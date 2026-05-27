export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
        <div>The Blue Heron</div>

        <div className="flex gap-6">
          <a href="/menu">Menu</a>
          <a href="/journal">Journal</a>
          <a href="/events">Events</a>
        </div>
      </div>
    </nav>
  )
}

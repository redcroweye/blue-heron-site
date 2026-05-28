import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl text-white mb-4">The Blue Heron</h3>
          <address className="not-italic leading-relaxed">
            123 Main Street
            <br />
            Hill City, SD 57745
          </address>
        </div>

        <div>
          <h3 className="uppercase tracking-[0.2em] text-amber-400 text-sm mb-4">
            Contact
          </h3>
          <a
            href="tel:+16055550123"
            className="block hover:text-white transition"
          >
            (605) 555-0123
          </a>
          <a
            href="mailto:hello@blueheronblackhills.com"
            className="block hover:text-white transition"
          >
            hello@blueheronblackhills.com
          </a>
        </div>

        <div>
          <h3 className="uppercase tracking-[0.2em] text-amber-400 text-sm mb-4">
            Follow
          </h3>
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-600">
        <Link href="/reservations" className="hover:text-amber-400 transition">
          Reservations
        </Link>
        <span className="mx-3">·</span>
        The Blue Heron Black Hills
      </div>
    </footer>
  )
}

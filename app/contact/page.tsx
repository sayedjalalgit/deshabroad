import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'Georgia', serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-blue-900">
            Desh Abroad
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <Link href="/study-abroad" className="hover:text-gray-900 transition">Study Abroad</Link>
            <Link href="/immigration" className="hover:text-gray-900 transition">Immigration</Link>
            <Link href="/about" className="hover:text-gray-900 transition">About</Link>
            <Link href="/contact" className="text-gray-900 font-medium">Contact</Link>
          </div>
          <Link href="/apply" className="text-sm font-medium px-4 py-2 rounded-full border border-gray-900 hover:bg-gray-900 hover:text-white transition">
            Apply Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
        <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Contact
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-8" style={{ letterSpacing: '-0.02em' }}>
          Let's talk<br />
          <span className="italic text-amber-600">about your future.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-xl leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Come visit us in Dhaka, call us, or fill in the form. We respond to every inquiry within 24 hours.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* Contact details + form */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24">

          {/* Left — details */}
          <div>
            <div className="space-y-0 mb-16">
              {[
                {
                  label: 'Visit us',
                  value: 'Desh Abroad Office\nDhaka, Bangladesh',
                },
                {
                  label: 'Call us',
                  value: '+880 1XXX XXXXXX',
                },
                {
                  label: 'Email us',
                  value: 'hello@deshabroad.com',
                },
                {
                  label: 'Office hours',
                  value: 'Saturday – Thursday\n9:00 AM – 6:00 PM',
                },
              ].map((item) => (
                <div key={item.label} className="py-6 border-t border-gray-100">
                  <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {item.label}
                  </p>
                  <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                    {item.value}
                  </p>
                </div>
              ))}
              <div className="border-t border-gray-100" />
            </div>

            <div>
              <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Follow us
              </p>
              <div className="flex items-center gap-6">
                {[
                  { name: 'Facebook', href: '#' },
                  { name: 'Instagram', href: '#' },
                  { name: 'WhatsApp', href: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-sm text-gray-400 hover:text-gray-900 transition"
                    style={{ fontFamily: 'system-ui, sans-serif' }}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Send a message
            </p>
            <form className="space-y-6" action="/apply">
              <div>
                <label className="block text-sm text-gray-500 mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition bg-transparent"
                  style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px' }}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition bg-transparent"
                  style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px' }}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+880 1XXX XXXXXX"
                  className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition bg-transparent"
                  style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px' }}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  How can we help?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition bg-transparent resize-none"
                  style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px' }}
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-gray-900 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-amber-600 transition-colors duration-300"
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  Send message →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-base font-bold text-gray-900 mb-1">Desh Abroad</p>
            <p className="text-sm text-gray-400" style={{ fontFamily: 'system-ui, sans-serif' }}>Dhaka, Bangladesh · deshabroad.com</p>
          </div>
          <div className="flex items-center gap-8 text-sm text-gray-400" style={{ fontFamily: 'system-ui, sans-serif' }}>
            <Link href="/study-abroad" className="hover:text-gray-900 transition">Study Abroad</Link>
            <Link href="/immigration" className="hover:text-gray-900 transition">Immigration</Link>
            <Link href="/apply" className="hover:text-gray-900 transition">Apply</Link>
            <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
          </div>
          <p className="text-xs text-gray-300" style={{ fontFamily: 'system-ui, sans-serif' }}>© 2026 Desh Abroad</p>
        </div>
      </footer>

    </main>
  )
}
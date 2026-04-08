import Link from 'next/link'

export default function AboutPage() {
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
            <Link href="/about" className="text-gray-900 font-medium">About</Link>
            <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
          </div>
          <Link href="/apply" className="text-sm font-medium px-4 py-2 rounded-full border border-gray-900 hover:bg-gray-900 hover:text-white transition">
            Apply Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
        <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
          About us
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-8" style={{ letterSpacing: '-0.02em' }}>
          We believe every<br />Bangladeshi student<br />
          <span className="italic text-amber-600">deserves the world.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-xl leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Desh Abroad was founded in Dhaka with one mission — to give every ambitious student honest, expert guidance to study and live abroad.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* Story */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Our story
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-8" style={{ letterSpacing: '-0.02em' }}>
              Built from experience,<br />not just business.
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '16px' }}>
              <p>
                Desh Abroad was started by people who went through the study abroad process themselves — and saw how broken, confusing and dishonest the consultancy industry in Bangladesh often is.
              </p>
              <p>
                Too many students get bad advice, pay high fees for poor service, and end up with visa rejections or the wrong universities. We decided to do it differently.
              </p>
              <p>
                We built Desh Abroad on three principles: honesty about your chances, deep expertise in each destination, and genuine care for every student's future — not just their application fee.
              </p>
            </div>
          </div>
          <div className="space-y-0">
            {[
              { number: '500+', label: 'Students successfully placed' },
              { number: '95%', label: 'Visa approval rate' },
              { number: '12+', label: 'Countries we specialise in' },
              { number: '6+', label: 'Years of experience' },
            ].map((stat) => (
              <div key={stat.label} className="py-8 border-t border-gray-100">
                <p className="text-5xl font-bold text-gray-900 mb-1" style={{ letterSpacing: '-0.02em' }}>
                  {stat.number}
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  {stat.label}
                </p>
              </div>
            ))}
            <div className="border-t border-gray-100" />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* Values */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
          What we stand for
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-16" style={{ letterSpacing: '-0.02em' }}>
          Our values.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
          {[
            {
              title: 'Honesty first',
              desc: 'We will never tell you what you want to hear just to take your money. If your profile is weak, we will tell you — and help you strengthen it.',
            },
            {
              title: 'Deep expertise',
              desc: 'Every country has different requirements, visa rules and university systems. Our team specialises deeply rather than knowing a little about everything.',
            },
            {
              title: 'Student first',
              desc: 'Our measure of success is not how many applications we process — it is how many students are thriving abroad a year after we helped them.',
            },
            {
              title: 'No hidden fees',
              desc: 'Our pricing is transparent and agreed upfront. We do not charge extra for document reviews, email follow-ups or additional guidance.',
            },
            {
              title: 'End-to-end',
              desc: 'We do not disappear after the visa is approved. Pre-departure support, accommodation guidance and first-month check-ins are part of what we do.',
            },
            {
              title: 'Community',
              desc: 'Our alumni stay connected. Students we helped years ago refer their siblings and friends — that trust is the foundation of everything we do.',
            },
          ].map((value) => (
            <div key={value.title} className="bg-white p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px' }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* Nazrul */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p
            className="text-2xl text-gray-700 leading-relaxed mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            "থাকব না কো বদ্ধ ঘরে, দেখব এবার জগৎটারে"
          </p>
          <p className="text-sm text-gray-400 mb-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
            "I will not stay confined at home — I will explore the world this time."
            <br />
            <span className="italic">— Kazi Nazrul Islam</span>
          </p>
          <p className="text-gray-500 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '16px' }}>
            This is the spirit behind Desh Abroad. Nazrul's words capture exactly what our students feel — a restlessness, an ambition, a hunger to see and contribute to the world beyond borders. We are here to make that possible.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* CTA */}
      <section className="py-32 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
          Come meet us<br />
          <span className="italic text-amber-600">in Dhaka.</span>
        </h2>
        <p className="text-lg text-gray-400 mb-10" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Free consultation. Bring your transcripts, your questions, your doubts. We will be honest with you.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/apply"
            className="inline-block bg-gray-900 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-amber-600 transition-colors duration-300"
          >
            Book Free Consultation →
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-400 hover:text-gray-900 transition"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            Contact us →
          </Link>
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
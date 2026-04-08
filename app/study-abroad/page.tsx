import Link from 'next/link'

const destinations = [
  {
    code: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    tagline: 'World-class universities, post-study work visa',
    highlights: ['2 year PSW Visa', 'Russell Group unis', 'Part-time work allowed'],
  },
  {
    code: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    tagline: 'Study, work, and build your future',
    highlights: ['3 year PGWP', 'PR pathways', 'Co-op programs'],
  },
  {
    code: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    tagline: 'Top-ranked universities, beautiful lifestyle',
    highlights: ['Student Visa 500', '2-4 year PSW', 'Work 48hrs/fortnight'],
  },
  {
    code: 'germany',
    country: 'Germany',
    flag: '🇩🇪',
    tagline: 'Tuition-free education, engineering hub',
    highlights: ['Low/no tuition fees', 'English programs', '18 month job seeker'],
  },
  {
    code: 'finland',
    country: 'Finland',
    flag: '🇫🇮',
    tagline: 'World\'s best education system',
    highlights: ['Safe & peaceful', 'English taught', 'EU work rights'],
  },
  {
    code: 'usa',
    country: 'United States',
    flag: '🇺🇸',
    tagline: 'Ivy League and beyond',
    highlights: ['F-1 Student Visa', 'OPT & CPT', 'Top research unis'],
  },
]

const steps = [
  { step: '01', title: 'Free consultation', desc: 'We understand your profile, goals and budget.' },
  { step: '02', title: 'University shortlist', desc: 'We match you with the right universities for your grades and ambitions.' },
  { step: '03', title: 'Application & SOP', desc: 'We write and review your statement of purpose and applications.' },
  { step: '04', title: 'Offer letter', desc: 'You receive your offer. We help you choose the best one.' },
  { step: '05', title: 'Visa application', desc: 'We prepare every document and guide you through the visa interview.' },
  { step: '06', title: 'Pre-departure', desc: 'Accommodation, travel, banking — we prepare you for everything.' },
]

export default function StudyAbroadPage() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'Georgia', serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-blue-900" style={{ fontFamily: "'Georgia', serif" }}>
            Desh Abroad
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <Link href="/study-abroad" className="text-gray-900 font-medium">Study Abroad</Link>
            <Link href="/immigration" className="hover:text-gray-900 transition">Immigration</Link>
            <Link href="/about" className="hover:text-gray-900 transition">About</Link>
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
          Study Abroad
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-8" style={{ letterSpacing: '-0.02em' }}>
          The world's best<br />
          <span className="italic text-amber-600">universities await.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-xl leading-relaxed mb-10" style={{ fontFamily: 'system-ui, sans-serif' }}>
          From IELTS prep to visa approval — we handle every step so you can focus on your future.
        </p>
        <Link href="/apply" className="inline-block bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-amber-600 transition-colors duration-300">
          Start your application →
        </Link>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* Destinations */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>Destinations</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-16" style={{ letterSpacing: '-0.02em' }}>
          Where will you go?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {destinations.map((dest) => (
            <Link
              key={dest.code}
              href={`/study-abroad/${dest.code}`}
              className="group bg-white p-8 hover:bg-amber-50 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{dest.flag}</span>
                <span className="text-gray-200 group-hover:text-amber-500 transition text-lg">→</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition">
                {dest.country}
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                {dest.tagline}
              </p>
              <div className="space-y-1">
                {dest.highlights.map((h) => (
                  <p key={h} className="text-xs text-gray-400 flex items-center gap-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    <span className="w-1 h-1 rounded-full bg-amber-400 inline-block flex-shrink-0" />
                    {h}
                  </p>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* Process */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>Our process</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-16" style={{ letterSpacing: '-0.02em' }}>
          How we work.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {steps.map((s) => (
            <div key={s.step} className="bg-white p-8">
              <p className="text-xs font-mono text-gray-200 mb-4">{s.step}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* CTA */}
      <section className="py-32 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
          Ready to apply?<br />
          <span className="italic text-amber-600">We are ready too.</span>
        </h2>
        <p className="text-lg text-gray-400 mb-10" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Free consultation. No commitment. Just honest advice.
        </p>
        <Link href="/apply" className="inline-block bg-gray-900 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-amber-600 transition-colors duration-300">
          Book Free Consultation →
        </Link>
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
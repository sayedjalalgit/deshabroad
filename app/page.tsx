import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight" style={{ fontFamily: "'Georgia', serif", color: '#1B3A6B' }}>
            Desh Abroad
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <Link href="/study-abroad" className="hover:text-gray-900 transition">Study Abroad</Link>
            <Link href="/immigration" className="hover:text-gray-900 transition">Immigration</Link>
            <Link href="/about" className="hover:text-gray-900 transition">About</Link>
            <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
          </div>
          <Link
            href="/apply"
            className="text-sm font-medium px-4 py-2 rounded-full border border-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            Apply Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-6">
            Study Abroad · Immigration · Bangladesh
          </p>
          <h1
            className="text-6xl md:text-7xl font-bold leading-tight text-gray-900 mb-8"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: '-0.02em' }}
          >
            From Desh<br />
            <span className="italic text-amber-600">to the World.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-4 max-w-xl" style={{ fontFamily: 'system-ui, sans-serif' }}>
            We help Bangladeshi students and families navigate university admissions, visas, and immigration — with honesty and care.
          </p>
          <p
            className="text-base text-gray-400 italic mb-12"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            "থাকব না কো বদ্ধ ঘরে, দেখব এবার জগৎটারে" — কাজী নজরুল ইসলাম
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/apply"
              className="bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-amber-600 transition-colors duration-300"
            >
              Request Free Consultation
            </Link>
            <Link
              href="/study-abroad"
              className="text-sm text-gray-500 hover:text-gray-900 transition flex items-center gap-2"
            >
              Explore destinations →
            </Link>
          </div>
        </div>
      </section>

      {/* Thin divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* Stats */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { number: '500+', label: 'Students placed' },
            { number: '12+', label: 'Destination countries' },
            { number: '95%', label: 'Visa success rate' },
            { number: '6+', label: 'Years of experience' },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-4xl font-bold text-gray-900 mb-1"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {stat.number}
              </p>
              <p className="text-sm text-gray-400" style={{ fontFamily: 'system-ui, sans-serif' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* Services */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-4">
              What we do
            </p>
            <h2
              className="text-4xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: '-0.02em' }}
            >
              Two services.<br />One mission.
            </h2>
          </div>
          <div className="space-y-0">
            <Link href="/study-abroad" className="group block py-8 border-t border-gray-100 hover:border-gray-300 transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Study Abroad
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    University shortlisting, application, IELTS prep, SOP writing, visa support and pre-departure guidance for UK, Canada, Australia and more.
                  </p>
                </div>
                <span className="text-gray-300 group-hover:text-amber-600 transition text-xl mt-1">→</span>
              </div>
            </Link>
            <Link href="/immigration" className="group block py-8 border-t border-gray-100 hover:border-gray-300 transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Immigration
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    Work permits, permanent residency, family visas and tourist visas. We guide you through every document and every step.
                  </p>
                </div>
                <span className="text-gray-300 group-hover:text-amber-600 transition text-xl mt-1">→</span>
              </div>
            </Link>
            <div className="pt-8 border-t border-gray-100" />
          </div>
        </div>
      </section>

      {/* Destinations */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-4">Destinations</p>
            <h2
              className="text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: '-0.02em' }}
            >
              Where we send<br />students.
            </h2>
          </div>
          <Link href="/study-abroad" className="text-sm text-gray-400 hover:text-gray-900 transition hidden md:block">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100">
          {[
            { country: 'United Kingdom', code: 'UK', note: 'PSW Visa · Top universities' },
            { country: 'Canada', code: 'CA', note: 'PR pathways · Co-op programs' },
            { country: 'Australia', code: 'AU', note: 'Student Visa 500 · IELTS' },
            { country: 'Germany', code: 'DE', note: 'Low tuition · English programs' },
            { country: 'Finland', code: 'FI', note: 'Free education · Safe country' },
            { country: 'United States', code: 'US', note: 'F-1 Visa · Ivy League' },
          ].map((dest) => (
            <Link
              key={dest.code}
              href={`/study-abroad/${dest.code.toLowerCase()}`}
              className="group bg-white p-8 hover:bg-amber-50 transition-colors duration-200"
            >
              <p className="text-xs font-mono text-gray-300 mb-3 group-hover:text-amber-500 transition">{dest.code}</p>
              <p
                className="text-lg font-bold text-gray-900 mb-1"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {dest.country}
              </p>
              <p className="text-xs text-gray-400" style={{ fontFamily: 'system-ui, sans-serif' }}>{dest.note}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      <section className="py-32 max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-6">Get started</p>
          <h2
            className="text-5xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: '-0.02em' }}
          >
            Your journey<br />starts with<br />
            <span className="italic">one conversation.</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Free consultation. No pressure. We will tell you honestly if we can help and exactly what it takes.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-gray-900 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-amber-600 transition-colors duration-300"
          >
            Book Free Consultation →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className="text-base font-bold text-gray-900 mb-1"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Desh Abroad
            </p>
            <p className="text-sm text-gray-400">Dhaka, Bangladesh · deshabroad.com</p>
          </div>
          <div className="flex items-center gap-8 text-sm text-gray-400">
            <Link href="/study-abroad" className="hover:text-gray-900 transition">Study Abroad</Link>
            <Link href="/immigration" className="hover:text-gray-900 transition">Immigration</Link>
            <Link href="/apply" className="hover:text-gray-900 transition">Apply</Link>
            <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
          </div>
          <p className="text-xs text-gray-300">© 2026 Desh Abroad</p>
        </div>
      </footer>

    </main>
  )
}
import Link from 'next/link'

const services = [
  {
    code: 'work-permit',
    title: 'Work Permit',
    desc: 'Skilled worker visas for UK, Canada, Australia and Europe. We handle documentation, employer sponsorship guidance and submission.',
    countries: ['UK', 'Canada', 'Australia', 'Germany'],
  },
  {
    code: 'permanent-residency',
    title: 'Permanent Residency',
    desc: 'PR applications for Canada Express Entry, Australia PR, and UK ILR. Long-term planning with honest eligibility assessment.',
    countries: ['Canada', 'Australia', 'UK'],
  },
  {
    code: 'family-visa',
    title: 'Family Visa',
    desc: 'Spouse visas, dependent visas and family reunification. We help families stay together across borders.',
    countries: ['UK', 'Canada', 'Australia', 'USA'],
  },
  {
    code: 'tourist-visa',
    title: 'Tourist & Visit Visa',
    desc: 'Visit visas for UK, Schengen, USA, Canada and Australia. Strong application with bank statements, itinerary and cover letter.',
    countries: ['UK', 'Schengen', 'USA', 'Canada'],
  },
]

const steps = [
  { step: '01', title: 'Eligibility check', desc: 'We honestly assess your profile and tell you what is realistic.' },
  { step: '02', title: 'Document checklist', desc: 'Every visa has specific requirements. We give you the exact list.' },
  { step: '03', title: 'Application prep', desc: 'We prepare and review every form, letter and supporting document.' },
  { step: '04', title: 'Submission', desc: 'We submit on your behalf or guide you through the process step by step.' },
  { step: '05', title: 'Follow up', desc: 'We track your application and respond to any additional requests.' },
  { step: '06', title: 'Decision', desc: 'We help you understand your visa decision and plan your next steps.' },
]

export default function ImmigrationPage() {
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
            <Link href="/immigration" className="text-gray-900 font-medium">Immigration</Link>
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
          Immigration
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-8" style={{ letterSpacing: '-0.02em' }}>
          A new country.<br />
          <span className="italic text-amber-600">A new beginning.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-xl leading-relaxed mb-10" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Work permits, permanent residency, family visas. We navigate the complexity so you can focus on building your life abroad.
        </p>
        <Link href="/apply" className="inline-block bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-amber-600 transition-colors duration-300">
          Get free assessment →
        </Link>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* Services */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>Services</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-16" style={{ letterSpacing: '-0.02em' }}>
          What we help with.
        </h2>
        <div className="space-y-0">
          {services.map((service) => (
            <div key={service.code} className="group py-10 border-t border-gray-100 hover:border-gray-300 transition">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition mb-2">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.countries.map((c) => (
                      <span
                        key={c}
                        className="text-xs text-gray-400 border border-gray-100 px-2 py-0.5 rounded-full"
                        style={{ fontFamily: 'system-ui, sans-serif' }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-500 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px' }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-100" />
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

      {/* Why us */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>Why Desh Abroad</p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Honest advice.<br />Not just paperwork.
            </h2>
          </div>
          <div className="space-y-0">
            {[
              { title: 'We tell you the truth', desc: 'If your application is weak, we will say so. We do not take fees for applications that will fail.' },
              { title: 'End-to-end support', desc: 'From first assessment to final decision — we are with you at every step.' },
              { title: 'Dhaka based, globally connected', desc: 'We understand Bangladeshi applicants and the specific challenges they face.' },
              { title: 'No hidden fees', desc: 'Clear pricing upfront. No surprises during the process.' },
            ].map((item) => (
              <div key={item.title} className="py-6 border-t border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
            <div className="border-t border-gray-100" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>
      <section className="py-32 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
          Not sure if<br />you qualify?<br />
          <span className="italic text-amber-600">Ask us.</span>
        </h2>
        <p className="text-lg text-gray-400 mb-10" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Free eligibility assessment. We will be honest about your chances.
        </p>
        <Link href="/apply" className="inline-block bg-gray-900 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-amber-600 transition-colors duration-300">
          Book Free Assessment →
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
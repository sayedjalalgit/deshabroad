import Link from 'next/link'
import { notFound } from 'next/navigation'

const countryData: Record<string, {
  name: string
  flag: string
  headline: string
  subline: string
  about: string
  whyStudy: string[]
  visaInfo: { label: string; value: string }[]
  requirements: string[]
  topUniversities: string[]
}> = {
  uk: {
    name: 'United Kingdom',
    flag: '🇬🇧',
    headline: 'Study in the UK',
    subline: 'World-class education, post-study work visa, and a multicultural experience.',
    about: 'The UK is home to some of the world\'s oldest and most respected universities. A UK degree is globally recognised and opens doors in every industry. With the Graduate Route visa, you can stay and work for 2 years after graduation.',
    whyStudy: [
      '2-year Post Study Work (PSW) visa after graduation',
      'Russell Group universities ranked globally',
      'Shorter degree programs — save time and money',
      'Part-time work up to 20 hours per week during studies',
      'Multicultural cities — large Bangladeshi community',
    ],
    visaInfo: [
      { label: 'Visa type', value: 'Student Visa (Tier 4)' },
      { label: 'Duration', value: 'Length of course + 4 months' },
      { label: 'Work rights', value: '20 hrs/week during term' },
      { label: 'Post-study', value: 'Graduate Route — 2 years' },
      { label: 'IELTS required', value: '6.0 – 7.0 depending on course' },
    ],
    requirements: [
      'Valid passport',
      'Unconditional offer letter from a licensed sponsor',
      'English language test (IELTS / PTE / Duolingo)',
      'Financial evidence (tuition + living costs)',
      'Academic transcripts and certificates',
      'Personal statement',
    ],
    topUniversities: [
      'University of Oxford', 'University of Cambridge', 'Imperial College London',
      'University College London', 'University of Edinburgh', 'University of Manchester',
    ],
  },
  canada: {
    name: 'Canada',
    flag: '🇨🇦',
    headline: 'Study in Canada',
    subline: 'Study, work, and build your permanent future in one of the world\'s most welcoming countries.',
    about: 'Canada is consistently ranked among the best countries in the world to live and study. With clear pathways to permanent residency, world-class universities, and co-op programs that let you earn while you learn, Canada is the top destination for ambitious Bangladeshi students.',
    whyStudy: [
      'Post-Graduation Work Permit (PGWP) up to 3 years',
      'Clear pathway to Permanent Residency (Express Entry)',
      'Co-op and internship programs built into degrees',
      'Affordable tuition compared to UK and USA',
      'Safe, multicultural and welcoming to immigrants',
    ],
    visaInfo: [
      { label: 'Visa type', value: 'Student Permit' },
      { label: 'Duration', value: 'Length of course' },
      { label: 'Work rights', value: '20 hrs/week on-campus' },
      { label: 'Post-study', value: 'PGWP — up to 3 years' },
      { label: 'IELTS required', value: '6.0 – 6.5 band' },
    ],
    requirements: [
      'Valid passport',
      'Letter of acceptance from DLI institution',
      'Proof of funds (tuition + CAD 10,000 living)',
      'IELTS or equivalent',
      'Statement of Purpose',
      'Medical exam (if required)',
    ],
    topUniversities: [
      'University of Toronto', 'McGill University', 'University of British Columbia',
      'University of Waterloo', 'McMaster University', 'University of Alberta',
    ],
  },
  australia: {
    name: 'Australia',
    flag: '🇦🇺',
    headline: 'Study in Australia',
    subline: 'Top-ranked universities, post-study work rights, and an exceptional quality of life.',
    about: 'Australia offers world-class education with a relaxed, high-quality lifestyle. Australian degrees are internationally recognised, and the government actively supports international graduates staying on to work and contribute to the economy.',
    whyStudy: [
      'Student Visa 500 with work rights',
      'Work up to 48 hours per fortnight during studies',
      'Temporary Graduate Visa — 2 to 4 years post study',
      'High quality of life and safe cities',
      'Strong job market for international graduates',
    ],
    visaInfo: [
      { label: 'Visa type', value: 'Student Visa (Subclass 500)' },
      { label: 'Work rights', value: '48 hrs/fortnight' },
      { label: 'Post-study', value: 'Subclass 485 — 2-4 years' },
      { label: 'IELTS required', value: '6.0 – 6.5 overall' },
      { label: 'Health insurance', value: 'OSHC mandatory' },
    ],
    requirements: [
      'Valid passport',
      'Confirmation of Enrolment (CoE)',
      'Genuine Temporary Entrant (GTE) statement',
      'IELTS or equivalent',
      'Financial capacity evidence',
      'Overseas Student Health Cover (OSHC)',
    ],
    topUniversities: [
      'University of Melbourne', 'Australian National University', 'University of Sydney',
      'University of Queensland', 'Monash University', 'UNSW Sydney',
    ],
  },
  germany: {
    name: 'Germany',
    flag: '🇩🇪',
    headline: 'Study in Germany',
    subline: 'Tuition-free public universities, engineering excellence, and a gateway to Europe.',
    about: 'Germany is one of the most attractive destinations for international students — primarily because most public universities charge little to no tuition fees. Germany is an engineering and research powerhouse with strong industry connections and an 18-month job seeker visa after graduation.',
    whyStudy: [
      'Most public universities charge no tuition fees',
      'English-taught programs widely available',
      '18-month job seeker visa after graduation',
      'Strong industry connections — engineering, tech, automotive',
      'Gateway to working across the EU',
    ],
    visaInfo: [
      { label: 'Visa type', value: 'National Visa (Student)' },
      { label: 'Tuition', value: 'Free at most public unis' },
      { label: 'Post-study', value: '18-month job seeker visa' },
      { label: 'Language', value: 'German or English programs' },
      { label: 'Blocked account', value: '€11,208/year required' },
    ],
    requirements: [
      'Valid passport',
      'University admission letter',
      'Blocked account (€11,208)',
      'German or English proficiency proof',
      'Academic certificates (attested)',
      'Health insurance',
    ],
    topUniversities: [
      'Technical University of Munich', 'LMU Munich', 'Heidelberg University',
      'Humboldt University Berlin', 'RWTH Aachen', 'University of Hamburg',
    ],
  },
  finland: {
    name: 'Finland',
    flag: '🇫🇮',
    headline: 'Study in Finland',
    subline: 'The world\'s best education system, safe society, and English-taught programs.',
    about: 'Finland consistently ranks as having the world\'s best education system. It is one of the safest and happiest countries on earth, with a strong emphasis on work-life balance. Many Finnish universities offer English-taught bachelor\'s and master\'s programs at affordable costs.',
    whyStudy: [
      'World\'s #1 education system',
      'Safe, peaceful and happy country',
      'English-taught programs at most universities',
      'EU work rights after graduation',
      'Strong tech and design industries',
    ],
    visaInfo: [
      { label: 'Visa type', value: 'Residence Permit (Student)' },
      { label: 'Work rights', value: '25 hrs/week during studies' },
      { label: 'Post-study', value: 'Job seeker permit — 2 years' },
      { label: 'Language', value: 'English programs available' },
      { label: 'Funds required', value: '€6,720/year' },
    ],
    requirements: [
      'Valid passport',
      'Acceptance letter from Finnish university',
      'Proof of funds (€560/month)',
      'English proficiency (IELTS 6.0+)',
      'Health insurance',
      'Completed application via Enter Finland portal',
    ],
    topUniversities: [
      'University of Helsinki', 'Aalto University', 'University of Turku',
      'Tampere University', 'University of Oulu', 'LUT University',
    ],
  },
  usa: {
    name: 'United States',
    flag: '🇺🇸',
    headline: 'Study in the USA',
    subline: 'The Ivy League, Silicon Valley connections, and the world\'s most recognised degrees.',
    about: 'The United States is home to the largest number of top-ranked universities in the world. An American degree carries immense global prestige. With OPT and CPT programs, students can gain real work experience with leading companies before graduating.',
    whyStudy: [
      'Most top-ranked universities in the world',
      'OPT — work for 1-3 years after graduation',
      'CPT — work while studying',
      'Silicon Valley and Wall Street connections',
      'Diverse campuses and research opportunities',
    ],
    visaInfo: [
      { label: 'Visa type', value: 'F-1 Student Visa' },
      { label: 'Work rights', value: '20 hrs/week on-campus' },
      { label: 'Post-study OPT', value: '12 months (36 for STEM)' },
      { label: 'IELTS required', value: '6.5 – 7.5 depending on uni' },
      { label: 'SEVIS fee', value: '$350 required' },
    ],
    requirements: [
      'Valid passport',
      'Form I-20 from university',
      'SEVIS fee payment',
      'SAT/GRE/GMAT scores',
      'IELTS or TOEFL',
      'Financial documents (bank statements)',
      'DS-160 visa application',
    ],
    topUniversities: [
      'MIT', 'Harvard University', 'Stanford University',
      'Columbia University', 'University of Chicago', 'Yale University',
    ],
  },
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>
}) {
  const { country } = await params
  const data = countryData[country.toLowerCase()]

  if (!data) notFound()

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'Georgia', serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-blue-900">
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
        <div className="flex items-center gap-4 mb-6">
          <Link href="/study-abroad" className="text-xs text-gray-400 hover:text-gray-700 transition" style={{ fontFamily: 'system-ui, sans-serif' }}>
            ← Study Abroad
          </Link>
        </div>
        <p className="text-4xl mb-4">{data.flag}</p>
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
          {data.headline}
        </h1>
        <p className="text-xl text-gray-400 max-w-xl leading-relaxed mb-10" style={{ fontFamily: 'system-ui, sans-serif' }}>
          {data.subline}
        </p>
        <Link href="/apply" className="inline-block bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-amber-600 transition-colors duration-300">
          Apply for {data.name} →
        </Link>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* About */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>Overview</p>
            <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
              {data.about}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>Why study here</p>
            <div className="space-y-3">
              {data.whyStudy.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px' }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* Visa info + requirements */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-8" style={{ fontFamily: 'system-ui, sans-serif' }}>Visa information</p>
            <div className="space-y-0">
              {data.visaInfo.map((item) => (
                <div key={item.label} className="py-4 border-t border-gray-100 flex justify-between items-center">
                  <p className="text-sm text-gray-400" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.label}</p>
                  <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.value}</p>
                </div>
              ))}
              <div className="border-t border-gray-100" />
            </div>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-8" style={{ fontFamily: 'system-ui, sans-serif' }}>What you need</p>
            <div className="space-y-3">
              {data.requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xs font-mono text-gray-200 mt-1 w-4 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-gray-600" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px' }}>{req}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>

      {/* Top universities */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <p className="text-xs font-medium tracking-widest text-amber-600 uppercase mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>Top universities</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-12" style={{ letterSpacing: '-0.02em' }}>
          Where we place students.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100">
          {data.topUniversities.map((uni) => (
            <div key={uni} className="bg-white px-8 py-6">
              <p className="text-base font-bold text-gray-900">{uni}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-gray-100" /></div>
      <section className="py-32 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
          Ready to study<br />in {data.name}?<br />
          <span className="italic text-amber-600">Let's make it happen.</span>
        </h2>
        <p className="text-lg text-gray-400 mb-10" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Free consultation. We will assess your profile and tell you exactly what is possible.
        </p>
        <Link href="/apply" className="inline-block bg-gray-900 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-amber-600 transition-colors duration-300">
          Apply for {data.name} →
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
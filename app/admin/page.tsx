import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export default async function AdminDashboard() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_session')?.value

  if (!token || token !== process.env.COOKIE_SECRET) {
    redirect('/admin/login')
  }  
  const [
    totalLeads,
    newLeads,
    studyAbroadLeads,
    immigrationLeads,
    completedLeads,
    recentLeads,
  ] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: 'NEW' } }),
    prisma.lead.count({ where: { serviceType: 'STUDY_ABROAD' } }),
    prisma.lead.count({ where: { serviceType: 'IMMIGRATION' } }),
    prisma.lead.count({ where: { status: 'COMPLETED' } }),
    prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
  ])

  const statusColors: Record<string, string> = {
    NEW: 'bg-blue-50 text-blue-700',
    CONTACTED: 'bg-yellow-50 text-yellow-700',
    IN_PROGRESS: 'bg-purple-50 text-purple-700',
    SUBMITTED: 'bg-orange-50 text-orange-700',
    COMPLETED: 'bg-green-50 text-green-700',
    DROPPED: 'bg-red-50 text-red-700',
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-blue-900">Desh Abroad</h1>
          <p className="text-xs text-gray-500">Admin Portal</p>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/admin" className="text-blue-900 font-medium">Dashboard</Link>
          <Link href="/admin/leads" className="text-gray-500 hover:text-blue-900">Leads</Link>
          <form action="/api/admin/logout" method="POST">
            <button className="text-gray-500 hover:text-red-600 transition">Sign out</button>
          </form>
        </nav>
      </div>

      <div className="px-8 py-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Dashboard</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Total Leads</p>
            <p className="text-3xl font-bold text-blue-900">{totalLeads}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">New</p>
            <p className="text-3xl font-bold text-blue-500">{newLeads}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Study Abroad</p>
            <p className="text-3xl font-bold text-purple-600">{studyAbroadLeads}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Immigration</p>
            <p className="text-3xl font-bold text-orange-500">{immigrationLeads}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-700">Recent Leads</h3>
              <Link href="/admin/leads" className="text-xs text-blue-700 hover:underline">
                View all →
              </Link>
            </div>
            <div className="space-y-3">
              {recentLeads.length === 0 && (
                <p className="text-sm text-gray-400">No leads yet.</p>
              )}
              {recentLeads.map((lead: any) => (
                <Link
                  key={lead.id}
                  href={`/admin/leads/${lead.id}`}
                  className="flex items-center justify-between py-2 border-b border-gray-50 hover:bg-gray-50 px-2 rounded-lg transition"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">{lead.fullName}</p>
                    <p className="text-xs text-gray-400">
                      {lead.serviceType === 'STUDY_ABROAD' ? 'Study Abroad' : 'Immigration'}
                      {lead.countryInterest && ` — ${lead.countryInterest}`}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[lead.status]}`}>
                      {lead.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(lead.createdAt).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short'
                      })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/admin/leads"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition"
              >
                <span className="text-sm text-gray-700">View all leads</span>
                <span className="text-gray-400">→</span>
              </Link>
              <Link
                href="/apply"
                target="_blank"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition"
              >
                <span className="text-sm text-gray-700">Open apply form</span>
                <span className="text-gray-400">↗</span>
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Completion Rate</p>
              <div className="flex items-end gap-2">
                <p className="text-2xl font-bold text-green-600">
                  {totalLeads > 0 ? Math.round((completedLeads / totalLeads) * 100) : 0}%
                </p>
                <p className="text-xs text-gray-400 mb-1">{completedLeads} of {totalLeads}</p>
              </div>
              <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all"
                  style={{ width: `${totalLeads > 0 ? (completedLeads / totalLeads) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
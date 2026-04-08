import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const statusColors: Record<string, string> = {
  NEW: 'bg-blue-50 text-blue-700',
  CONTACTED: 'bg-yellow-50 text-yellow-700',
  IN_PROGRESS: 'bg-purple-50 text-purple-700',
  SUBMITTED: 'bg-orange-50 text-orange-700',
  COMPLETED: 'bg-green-50 text-green-700',
  DROPPED: 'bg-red-50 text-red-700',
}

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-blue-900">Desh Abroad</h1>
          <p className="text-xs text-gray-500">Admin Portal</p>
        </div>
        <form action="/api/admin/logout" method="POST">
          <button className="text-sm text-gray-500 hover:text-red-600 transition">
            Sign out
          </button>
        </form>
      </div>

      <div className="px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Leads
            <span className="ml-2 text-sm font-normal text-gray-400">
              {leads.length} total
            </span>
          </h2>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Name</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Contact</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Service</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Interest</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {leads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    No leads yet. Share your /apply link to get started.
                  </td>
                </tr>
              )}
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-800">
                     <Link href={`/admin/leads/${lead.id}`} className="hover:text-blue-700 hover:underline">
                         {lead.fullName}
                     </Link>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-600">{lead.email}</div>
                    <div className="text-gray-400 text-xs">{lead.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-gray-600">
                      {lead.serviceType === 'STUDY_ABROAD' ? 'Study Abroad' : 'Immigration'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{lead.countryInterest || '—'}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[lead.status]}`}>
                      {lead.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-xs">
                    {new Date(lead.createdAt).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'short', year: 'numeric'
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
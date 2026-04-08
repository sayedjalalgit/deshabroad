'use client'

import { useState } from 'react'
import { updateLeadStatus, updateLeadNotes } from './actions'
import Link from 'next/link'

const STATUSES = ['NEW', 'CONTACTED', 'IN_PROGRESS', 'SUBMITTED', 'COMPLETED', 'DROPPED']

const statusColors: Record<string, string> = {
  NEW: 'bg-blue-50 text-blue-700',
  CONTACTED: 'bg-yellow-50 text-yellow-700',
  IN_PROGRESS: 'bg-purple-50 text-purple-700',
  SUBMITTED: 'bg-orange-50 text-orange-700',
  COMPLETED: 'bg-green-50 text-green-700',
  DROPPED: 'bg-red-50 text-red-700',
}

export default function LeadDetailClient({ lead }: { lead: any }) {
  const [status, setStatus] = useState(lead.status)
  const [notes, setNotes] = useState(lead.notes || '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleStatusChange(newStatus: string) {
    setStatus(newStatus)
    await updateLeadStatus(lead.id, newStatus)
  }

  async function handleSaveNotes() {
    setSaving(true)
    await updateLeadNotes(lead.id, notes)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-blue-900">Desh Abroad</h1>
          <p className="text-xs text-gray-500">Admin Portal</p>
        </div>
        <Link href="/admin/leads" className="text-sm text-blue-700 hover:underline">
          ← Back to leads
        </Link>
      </div>

      <div className="px-8 py-6 max-w-3xl">
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{lead.fullName}</h2>
              <p className="text-gray-500 text-sm mt-0.5">
                {lead.serviceType === 'STUDY_ABROAD' ? 'Study Abroad' : 'Immigration'}
                {lead.countryInterest && ` — ${lead.countryInterest}`}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
              {status.replace('_', ' ')}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm border-t border-gray-100 pt-4">
            <div>
              <p className="text-gray-400 text-xs mb-1">Email</p>
              <p className="text-gray-700">{lead.email}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Phone</p>
              <p className="text-gray-700">{lead.phone}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Applied on</p>
              <p className="text-gray-700">
                {new Date(lead.createdAt).toLocaleDateString('en-GB', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Update Status</h3>
          <div className="flex flex-wrap gap-2">
            {STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => handleStatusChange(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                  status === s
                    ? statusColors[s] + ' border-transparent'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                }`}
              >
                {s.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Internal Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={5}
            placeholder="Add notes about this lead..."
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
          />
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-green-600">
              {saved ? 'Notes saved!' : ''}
            </span>
            <button
              onClick={handleSaveNotes}
              disabled={saving}
              className="bg-blue-900 hover:bg-blue-800 text-white text-sm px-4 py-2 rounded-lg transition disabled:opacity-60"
            >
              {saving ? 'Saving...' : 'Save Notes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
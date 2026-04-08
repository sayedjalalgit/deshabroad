'use client'

import { useState } from 'react'
import { submitLead } from './actions'

export default function ApplyPage() {
  const [serviceType, setServiceType] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    const formData = new FormData(e.currentTarget)
    const response = await submitLead(formData)

    setResult(response)
    setLoading(false)

    if (response.success) {
      (e.target as HTMLFormElement).reset()
      setServiceType('')
    }
  }

  return (
    <main className="min-h-screen bg-orange-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-white rounded-2xl border border-orange-100 p-8">

        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-blue-900">Desh Abroad</h1>
          <p className="text-orange-500 italic text-sm mt-1">From Desh to the World</p>
          <h2 className="text-lg font-semibold text-gray-800 mt-4">Free Consultation Request</h2>
          <p className="text-gray-500 text-sm mt-1">Fill in your details and we will contact you within 24 hours.</p>
        </div>

        {result && (
          <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${
            result.success
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {result.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              type="text"
              required
              placeholder="Your full name"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              required
              placeholder="+880 1XXX XXXXXX"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Type <span className="text-red-500">*</span>
            </label>
            <select
              name="serviceType"
              required
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
            >
              <option value="">Select a service</option>
              <option value="STUDY_ABROAD">Study Abroad</option>
              <option value="IMMIGRATION">Immigration</option>
            </select>
          </div>

          {serviceType === 'STUDY_ABROAD' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country of Interest
              </label>
              <select
                name="countryInterest"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
              >
                <option value="">Select a country</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="USA">United States</option>
                <option value="Germany">Germany</option>
                <option value="Finland">Finland</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}

          {serviceType === 'IMMIGRATION' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Immigration Type
              </label>
              <select
                name="countryInterest"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
              >
                <option value="">Select type</option>
                <option value="Work Permit">Work Permit</option>
                <option value="Permanent Residency">Permanent Residency (PR)</option>
                <option value="Family Visa">Family Visa</option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg text-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Request Free Consultation →'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          By submitting you agree to be contacted by our team. No spam.
        </p>
      </div>
    </main>
  )
}
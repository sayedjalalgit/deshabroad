import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import LeadDetailClient from './LeadDetailClient'

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const lead = await prisma.lead.findUnique({
    where: { id },
    include: { applications: true, consultations: true },
  })

  if (!lead) notFound()

  return <LeadDetailClient lead={lead} />
}
'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function updateLeadStatus(leadId: string, status: string) {
  await prisma.lead.update({
    where: { id: leadId },
    data: { status: status as any },
  })
  revalidatePath('/admin/leads')
  revalidatePath(`/admin/leads/${leadId}`)
}

export async function updateLeadNotes(leadId: string, notes: string) {
  await prisma.lead.update({
    where: { id: leadId },
    data: { notes },
  })
  revalidatePath(`/admin/leads/${leadId}`)
}
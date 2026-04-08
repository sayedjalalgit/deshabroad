'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { sendNewLeadNotification } from '@/lib/email'

export async function submitLead(formData: FormData) {
  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const serviceType = formData.get('serviceType') as 'STUDY_ABROAD' | 'IMMIGRATION'
  const countryInterest = formData.get('countryInterest') as string

  if (!fullName || !email || !phone || !serviceType) {
    return { success: false, message: 'Please fill in all required fields.' }
  }

  try {
    await prisma.lead.create({
      data: {
        fullName,
        email,
        phone,
        serviceType,
        countryInterest: countryInterest || null,
        status: 'NEW',
      },
    })

    try {
      await sendNewLeadNotification({
        fullName,
        email,
        phone,
        serviceType,
        countryInterest,
      })
    } catch (emailError) {
      console.error('Email notification failed:', emailError)
    }

    revalidatePath('/admin/leads')
    return { success: true, message: 'Application submitted successfully!' }
  } catch (error) {
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
}
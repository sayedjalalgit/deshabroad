import { Resend } from 'resend'

export async function sendNewLeadNotification({
  fullName,
  email,
  phone,
  serviceType,
  countryInterest,
}: {
  fullName: string
  email: string
  phone: string
  serviceType: string
  countryInterest?: string | null
}) {
  console.log('RESEND KEY:', process.env.RESEND_API_KEY?.slice(0, 8))
  console.log('SENDING TO:', process.env.ADMIN_NOTIFY_EMAIL)

  const resend = new Resend(process.env.RESEND_API_KEY)
  const service = serviceType === 'STUDY_ABROAD' ? 'Study Abroad' : 'Immigration'

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.ADMIN_NOTIFY_EMAIL!,
    subject: `New ${service} Lead — ${fullName}`,
    html: `
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto;">
        <h2 style="color: #1e3a6e;">New Lead — Desh Abroad</h2>
        <table style="width:100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 140px;">Name</td>
            <td style="padding: 8px 0; font-weight: 600;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;">Email</td>
            <td style="padding: 8px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;">Phone</td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;">Service</td>
            <td style="padding: 8px 0;">${service}</td>
          </tr>
          ${countryInterest ? `
          <tr>
            <td style="padding: 8px 0; color: #666;">Interest</td>
            <td style="padding: 8px 0;">${countryInterest}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top: 24px;">
          <a href="${process.env.NEXTAUTH_URL}/admin/leads"
            style="background: #1e3a6e; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px;">
            View in Admin →
          </a>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 24px;">Desh Abroad Admin Notification</p>
      </div>
    `,
  })
}
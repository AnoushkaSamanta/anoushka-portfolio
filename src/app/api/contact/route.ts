import { Resend } from 'resend'
import { PERSONAL } from '@/lib/data'

const resend = new Resend(process.env.RESEND_API_KEY || 're_fallback')

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    await resend.emails.send({
      from: 'portfolio@yourdomain.com', // In production, replace with verified domain
      to: PERSONAL.email,
      subject: `Portfolio message from ${name}`,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })
    return Response.json({ success: true })
  } catch {
    return Response.json({ success: false }, { status: 500 })
  }
}

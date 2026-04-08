import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function POST() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  return NextResponse.redirect(new URL('/admin/login', 'http://localhost:3000'))
}
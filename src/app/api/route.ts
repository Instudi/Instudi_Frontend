import { NextResponse } from 'next/server'
import { cookies, headers } from 'next/headers'
import { type NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

//export const revalidate = 60
//  redirect('https://nextjs.org/')
//const headersList = headers()

/*
export async function GET() {
    const res = await fetch('https://data.mongodb-api.com/...', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()

    return NextResponse.json({ data })
}

export async function GET2(request: Request) {
    const cookieStore = cookies()
    const token: any = cookieStore.get('token')

    return new Response('Hello, Next.js!', {
        status: 200,
        headers: { 'Set-Cookie': `token=${token.value}` },
    })
}
*/
import logger from "@/utils/logger";
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {

    const email = req.nextUrl.searchParams.get('email')
    const password = req.nextUrl.searchParams.get('password')
    const role = req.nextUrl.searchParams.get('role')

    const res = await fetch('http://localhost:3006/users/add', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            role,
            name: "test"
        })
    })

    const data = await res.json()

    return NextResponse.json({ data })
}
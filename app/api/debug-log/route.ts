import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const dir = path.join(process.cwd(), '.cursor')
    const logPath = path.join(dir, 'debug-2c0609.log')
    fs.mkdirSync(dir, { recursive: true })
    fs.appendFileSync(logPath, JSON.stringify(body) + '\n')
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

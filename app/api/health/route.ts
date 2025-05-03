import { NextResponse } from "next/server"

// Track when the server started
const serverStartTime = new Date()

export async function GET() {
  // Calculate uptime
  const now = new Date()
  const uptimeMs = now.getTime() - serverStartTime.getTime()

  // Convert to hours and minutes
  const hours = Math.floor(uptimeMs / (1000 * 60 * 60))
  const minutes = Math.floor((uptimeMs % (1000 * 60 * 60)) / (1000 * 60))

  return NextResponse.json({
    status: "ok",
    version: "1.0.0",
    uptime: `${hours}h ${minutes}m`,
  })
}

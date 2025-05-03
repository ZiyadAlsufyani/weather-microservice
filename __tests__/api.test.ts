import { GET as getWeather } from "@/app/api/weather/route"
import { GET as getHealth } from "@/app/api/health/route"

// Mock NextRequest
const createMockRequest = (url: string) => {
  return {
    url,
    nextUrl: new URL(url),
  } as any
}

describe("API Routes", () => {
  describe("Weather API", () => {
    test("should return weather data for a valid city", async () => {
      const req = createMockRequest("http://localhost:3000/api/weather?city=london")
      const res = await getWeather(req)
      const data = await res.json()

      expect(res.status).toBe(200)
      expect(data).toHaveProperty("city", "London")
      expect(data).toHaveProperty("temperature")
      expect(data).toHaveProperty("conditions")
    })

    test("should return 400 when no city is provided", async () => {
      const req = createMockRequest("http://localhost:3000/api/weather")
      const res = await getWeather(req)

      expect(res.status).toBe(400)
    })

    test("should return 404 when city is not found", async () => {
      const req = createMockRequest("http://localhost:3000/api/weather?city=nonexistent")
      const res = await getWeather(req)

      expect(res.status).toBe(404)
    })
  })

  describe("Health API", () => {
    test("should return health status", async () => {
      const res = await getHealth()
      const data = await res.json()

      expect(res.status).toBe(200)
      expect(data).toHaveProperty("status", "ok")
      expect(data).toHaveProperty("version")
      expect(data).toHaveProperty("uptime")
    })
  })
})

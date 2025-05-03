import { type NextRequest, NextResponse } from "next/server"

interface WeatherData {
  city: string;
  temperature: number;
  conditions: string;
  humidity: number;
  windSpeed: number;
}

// Mock weather data for demonstration purposes
const weatherData: Record<string, WeatherData> = {
  london: {
    city: "London",
    temperature: 18.5,
    conditions: "Partly Cloudy",
    humidity: 72,
    windSpeed: 12.3,
  },
  newyork: {
    city: "New York",
    temperature: 22.8,
    conditions: "Sunny",
    humidity: 65,
    windSpeed: 8.7,
  },
  tokyo: {
    city: "Tokyo",
    temperature: 26.2,
    conditions: "Clear",
    humidity: 70,
    windSpeed: 5.4,
  },
  paris: {
    city: "Paris",
    temperature: 20.1,
    conditions: "Overcast",
    humidity: 68,
    windSpeed: 10.2,
  },
  sydney: {
    city: "Sydney",
    temperature: 24.7,
    conditions: "Sunny",
    humidity: 62,
    windSpeed: 14.8,
  },
}

export async function GET(request: NextRequest) {
  // Get the city from the query parameters
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")?.toLowerCase()

  // Log the request for monitoring
  console.warn(`Weather request received for city: ${city}`)

  // Return an error if no city is provided
  if (!city) {
    return NextResponse.json({ error: "City parameter is required" }, { status: 400 })
  }

  // Return the weather data for the requested city
  const data = weatherData[city]

  if (data) {
    return NextResponse.json(data)
  } else {
    // Return a 404 if the city is not found
    return NextResponse.json({ error: "City not found" }, { status: 404 })
  }
}

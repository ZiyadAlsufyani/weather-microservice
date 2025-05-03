export interface WeatherData {
  city: string
  temperature: number
  conditions: string
  humidity: number
  windSpeed: number
}

export function validateCity(city: string): boolean {
  // Simple validation to check if city name contains only letters, spaces, and hyphens
  return /^[a-zA-Z\s-]+$/.test(city)
}

export function formatTemperature(temp: number, unit: "C" | "F" = "C"): string {
  return `${temp.toFixed(1)}°${unit}`
}

export function getWeatherIcon(conditions: string): string {
  const conditionsLower = conditions.toLowerCase()

  if (conditionsLower.includes("sunny") || conditionsLower.includes("clear")) {
    return "☀️"
  } else if (conditionsLower.includes("partly cloudy")) {
    return "⛅"
  } else if (conditionsLower.includes("cloudy") || conditionsLower.includes("overcast")) {
    return "☁️"
  } else if (conditionsLower.includes("rain")) {
    return "🌧️"
  } else if (conditionsLower.includes("snow")) {
    return "❄️"
  } else if (conditionsLower.includes("storm") || conditionsLower.includes("thunder")) {
    return "⛈️"
  } else {
    return "🌡️"
  }
}

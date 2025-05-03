import { validateCity, formatTemperature, getWeatherIcon } from "@/lib/weather"

describe("Weather Utility Functions", () => {
  describe("validateCity", () => {
    test("should return true for valid city names", () => {
      expect(validateCity("London")).toBe(true)
      expect(validateCity("New York")).toBe(true)
      expect(validateCity("San Francisco")).toBe(true)
      expect(validateCity("Saint-Petersburg")).toBe(true)
    })

    test("should return false for invalid city names", () => {
      expect(validateCity("London123")).toBe(false)
      expect(validateCity("New York!")).toBe(false)
      expect(validateCity("San Francisco@")).toBe(false)
      expect(validateCity("123")).toBe(false)
    })
  })

  describe("formatTemperature", () => {
    test("should format temperature in Celsius by default", () => {
      expect(formatTemperature(20)).toBe("20.0°C")
      expect(formatTemperature(20.5)).toBe("20.5°C")
      expect(formatTemperature(-5)).toBe("-5.0°C")
    })

    test("should format temperature in Fahrenheit when specified", () => {
      expect(formatTemperature(68, "F")).toBe("68.0°F")
      expect(formatTemperature(72.5, "F")).toBe("72.5°F")
      expect(formatTemperature(32, "F")).toBe("32.0°F")
    })
  })

  describe("getWeatherIcon", () => {
    test("should return correct icon for sunny conditions", () => {
      expect(getWeatherIcon("Sunny")).toBe("☀️")
      expect(getWeatherIcon("Clear")).toBe("☀️")
    })

    test("should return correct icon for cloudy conditions", () => {
      expect(getWeatherIcon("Partly Cloudy")).toBe("⛅")
      expect(getWeatherIcon("Cloudy")).toBe("☁️")
      expect(getWeatherIcon("Overcast")).toBe("☁️")
    })

    test("should return correct icon for rainy conditions", () => {
      expect(getWeatherIcon("Rain")).toBe("🌧️")
      expect(getWeatherIcon("Light Rain")).toBe("🌧️")
    })

    test("should return default icon for unknown conditions", () => {
      expect(getWeatherIcon("Unknown")).toBe("🌡️")
    })
  })
})

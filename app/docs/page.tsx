import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ApiDocs() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">API Documentation</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Weather Endpoint</CardTitle>
            <CardDescription>Get current weather data for a specific city</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Endpoint</h3>
                <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded block">
                  GET /api/weather?city={"{city_name}"}
                </code>
              </div>

              <div>
                <h3 className="text-lg font-medium">Parameters</h3>
                <ul className="list-disc pl-5">
                  <li>
                    <code>city</code> (required): Name of the city
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium">Response</h3>
                <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto">
                  {`{
  "city": "London",
  "temperature": 18.5,
  "conditions": "Partly Cloudy",
  "humidity": 72,
  "windSpeed": 12.3
}`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium">Example</h3>
                <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded block">GET /api/weather?city=london</code>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Check Endpoint</CardTitle>
            <CardDescription>Check if the API is operational</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Endpoint</h3>
                <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded block">GET /api/health</code>
              </div>

              <div>
                <h3 className="text-lg font-medium">Response</h3>
                <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto">
                  {`{
  "status": "ok",
  "version": "1.0.0",
  "uptime": "10h 23m"
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

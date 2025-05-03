import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Weather Microservice</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>Learn how to use our weather API endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our RESTful API provides current weather data for cities worldwide.</p>
            </CardContent>
            <CardFooter>
              <Link href="/docs" className="w-full">
                <Button className="w-full">View API Docs</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Try the API</CardTitle>
              <CardDescription>Test our weather data endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Make requests to our API endpoints to retrieve weather information.</p>
            </CardContent>
            <CardFooter>
              <Link href="/api/weather?city=london" className="w-full">
                <Button className="w-full">Try Example Request</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>DevOps Pipeline</CardTitle>
            <CardDescription>This project demonstrates a complete GitHub-based DevOps pipeline</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This microservice is built with a comprehensive DevOps pipeline including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>CI/CD with GitHub Actions</li>
              <li>Docker containerization</li>
              <li>Automated testing and linting</li>
              <li>Security scanning</li>
              <li>Deployment to Vercel</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

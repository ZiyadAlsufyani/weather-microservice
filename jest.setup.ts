import '@testing-library/jest-dom';

// Mock Next.js Response functionality
const NextResponse = {
  json: (body: any, init?: ResponseInit) => {
    const response = new Response(JSON.stringify(body), {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {})
      }
    });
    Object.defineProperty(response, 'status', {
      get() {
        return init?.status || 200;
      }
    });
    return response;
  }
};

// Mock Next.js imports
jest.mock('next/server', () => ({
  NextResponse
}));

// Mock Request, Response, and other web APIs
class MockRequest implements Partial<Request> {
  constructor(public input: RequestInfo | URL, public init?: RequestInit) {}
}

class MockResponse implements Partial<Response> {
  public status: number;
  
  constructor(public body: BodyInit | null = null, public init?: ResponseInit) {
    this.status = init?.status || 200;
  }
  
  json() {
    return Promise.resolve(JSON.parse(this.body as string));
  }
}

class MockHeaders implements Partial<Headers> {
  private headers: Map<string, string> = new Map();
  
  constructor(init?: HeadersInit) {
    if (init) {
      Object.entries(init).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
  }
  
  append(name: string, value: string): void {
    this.headers.set(name.toLowerCase(), value);
  }
  
  get(name: string): string | null {
    return this.headers.get(name.toLowerCase()) || null;
  }
  
  set(name: string, value: string): void {
    this.headers.set(name.toLowerCase(), value);
  }
}

global.Request = MockRequest as unknown as typeof Request;
global.Response = MockResponse as unknown as typeof Response;
global.Headers = MockHeaders as unknown as typeof Headers;
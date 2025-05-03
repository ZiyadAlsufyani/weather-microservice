# Weather Microservice with DevOps Pipeline

This project demonstrates a complete DevOps pipeline for a cloud-based microservice using GitHub's ecosystem. The microservice provides weather data via a RESTful API.

## Architecture

![Architecture Diagram](./docs/architecture.png)

This project implements a comprehensive DevOps pipeline with:

- **GitHub Actions** for CI/CD
- **Docker** for containerization
- **Vercel** for cloud deployment
- **Jest** for automated testing
- **ESLint** for code quality

## API Endpoints

- `GET /api/weather?city={city_name}` - Get weather data for a specific city
- `GET /api/health` - Health check endpoint

## DevOps Pipeline

### CI Pipeline

The CI pipeline runs on every pull request and push to the main branch:

1. **Linting**: Checks code quality with ESLint
2. **Testing**: Runs Jest tests and generates coverage reports
3. **Security Scanning**: Uses GitHub CodeQL and Trivy for vulnerability scanning

### CD Pipeline

The CD pipeline runs on pushes to the main branch:

1. **Development Deployment**: Deploys to the development environment
2. **Production Deployment**: Deploys to the production environment after successful development deployment

## Local Development

### Prerequisites

- Node.js 18 or later
- Docker (optional)

### Setup

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/yourusername/weather-microservice.git
   cd weather-microservice
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server
   \`\`\`bash
   npm run dev
   \`\`\`

4. Run tests
   \`\`\`bash
   npm test
   \`\`\`

### Using Docker

1. Build the Docker image
   \`\`\`bash
   docker build -t weather-microservice .
   \`\`\`

2. Run the container
   \`\`\`bash
   docker run -p 3000:3000 weather-microservice
   \`\`\`

## Team Roles and Responsibilities

- **Developer**: Responsible for coding the core features
- **CI/CD Engineer**: Manages GitHub Actions workflows
- **Operations/QA Analyst**: Oversees testing, logging, and monitoring

## GitHub Project Management

This project uses GitHub Projects for task tracking and GitHub Issues for bug tracking and feature requests.

## License

MIT

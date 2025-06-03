# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-index-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Development with Hot Reloading

This web service is configured to support hot reloading when running in Docker. This means you can make changes to your source code and see them reflected immediately without having to rebuild the Docker container.

#### How it works

The Docker setup uses volume mounting to sync your local source code with the container:

```yaml
volumes:
  - ./apps/web/app:/app/apps/web/app
  - ./apps/web/public:/app/apps/web/public
```

And it runs the development script with hot module reloading:

```yaml
command: bun run dev
```

#### Development Workflow

1. Start the services with Docker Compose from the project root:
   ```bash
   docker-compose up
   ```

2. Make changes to your source code in the `apps/web/app` or `apps/web/public` directories

3. The changes will be automatically detected and the application will reload

4. View the web application at http://localhost:3000

### Docker Deployment

To build and run using Docker for production:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

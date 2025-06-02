## Local Development

To install dependencies:
```sh
bun install
```

To run locally:
```sh
bun run dev
```

Open http://localhost:3001

## Docker Development with Hot Reloading

This API service is configured to support hot reloading when running in Docker. This means you can make changes to your source code and see them reflected immediately without having to rebuild the Docker container.

### How it works

The Docker setup uses volume mounting to sync your local source code with the container:

```yaml
volumes:
  - ./apps/api/src:/app/apps/api/src
```

And it runs the development script with Bun's hot reloading feature:

```yaml
command: bun run dev
```

### Development Workflow

1. Start the services with Docker Compose from the project root:
   ```bash
   docker-compose up
   ```

2. Make changes to your source code in the `apps/api/src` directory

3. The changes will be automatically detected and the application will reload

4. View the API at http://localhost:3001

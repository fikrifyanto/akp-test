# Use Bun as base image
FROM oven/bun:latest AS base

# Set working directory
WORKDIR /app

# Copy only the necessary files for dependency installation
COPY package.json bun.lock ./
COPY apps/web/package.json ./apps/web/

# Install only the dependencies needed for the web app
# Use --frozen-lockfile to ensure consistent installs
RUN bun install

# Copy configuration files first (better for caching)
COPY apps/web/tsconfig.json \
     apps/web/react-router.config.ts \
     apps/web/vite.config.ts \
     ./apps/web/

# Copy the rest of the application code
COPY apps/web/app ./apps/web/app
COPY apps/web/public ./apps/web/public

# Set working directory to web directory
WORKDIR /app/apps/web

# Build the application
RUN bun run build

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["bun", "run", "start"]

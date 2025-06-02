# Menggunakan image Bun sebagai base image
FROM oven/bun:latest AS base

# Set working directory
WORKDIR /app

# Copy root package.json and workspace configuration
COPY package.json ./
COPY bun.lock ./
COPY packages ./packages

# Copy API package.json
COPY apps/api/package*.json ./apps/api/

# Set working directory to API directory
WORKDIR /app/apps/api

# Install dependencies using Bun
RUN bun install

# Copy API source code
COPY apps/api/src ./src

# Expose port yang digunakan oleh API Hono (ganti dengan port Anda jika berbeda)
EXPOSE 3001

# Command untuk menjalankan aplikasi Hono dengan Bun
CMD ["bun", "run", "start"]

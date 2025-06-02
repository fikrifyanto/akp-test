# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `api`: a [Hono](https://hono.dev/) API server
- `web`: a [React Router](https://reactrouter.com/) app
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for code linting and formatting

### Biome Integration

This project uses [Biome](https://biomejs.dev/) for code linting and formatting, replacing the traditional ESLint and Prettier setup. Biome is a fast, modern linter and formatter written in Rust.

#### Available Scripts

- `bun run lint`: Run Biome linter
- `bun run format`: Format code with Biome
- `bun run check`: Run both linting and formatting checks

#### Configuration

Biome is configured in the `biome.json` file at the root of the project. This single configuration file handles both linting and formatting rules.

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages locally, run the following command:

```
cd my-turborepo
pnpm dev
```

### Docker Development with Hot Reloading

This project supports Docker-based development with hot reloading, allowing you to make changes to your source code without rebuilding containers.

To start development with Docker:

```
docker-compose up
```

This will:
- Start the API service on http://localhost:3001
- Start the web service on http://localhost:3000
- Mount source code directories as volumes for live code synchronization
- Enable hot module reloading for both services

When you make changes to the source code:
- For API: Edit files in `apps/api/src` directory
- For Web: Edit files in `apps/web/app` or `apps/web/public` directories

The changes will be automatically detected and the applications will reload.

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)

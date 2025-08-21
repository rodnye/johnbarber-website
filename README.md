# 💈 Johnbarber Website

> 🌐 URL: https://johnbarber.vercel.app

## Description

The Johnbarber website is designed to showcase barber services and provide an easy way for customers to get in touch.

## Requirements

- Next.js 15.5.0
- React 19.1.0
- TypeScript
- Tailwind CSS 4.0
- Prisma 6.14.0

## Installation

To install the project dependencies, run the following command:

```bash
pnpm install
```

## Database Setup

Before running the application, make sure to set up the database:

```bash
pnpm prisma:generate
pnpm prisma:migrate
```

## Usage

To run the project in development mode, use:

```bash
pnpm dev
```

To build the project for production, use:

```bash
pnpm build
```

To start the production server, use:

```bash
pnpm start
```

## Scripts

- `dev`: Starts the development server with Turbopack
- `build`: Compiles the project for production with Turbopack
- `start`: Starts the production server
- `lint`: Runs ESLint to check for code quality
- `format`: Formats code with Prettier
- `format:preview`: Checks code formatting without making changes
- `prisma:generate`: Generates Prisma client
- `prisma:studio`: Opens Prisma Studio for database management
- `prisma:migrate`: Runs database migrations

## Development

The project uses Turbopack for faster development builds and includes Prisma for database management. Make sure to run database migrations after pulling new changes.

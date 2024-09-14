# Prisma Demo Project

This project demonstrates the basic usage of Prisma, an open-source database toolkit.

## Prerequisites

- Node.js (v12 or later)
- npm or yarn

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

## Prisma Commands

Here are the main Prisma commands used in this project:

### `npx prisma init`

Initializes a new Prisma project. This creates a new `prisma` directory with a `schema.prisma` file and a `.env` file.

### `npx prisma generate`

Generates the Prisma Client based on your Prisma schema. Run this command after making changes to your `schema.prisma` file.

### `npx prisma db push`

Pushes the state of your Prisma schema file to the database without using migrations. Useful for prototyping and development.

### `npx prisma migrate dev`

Creates a new migration based on your schema changes, applies it to the database, and updates the Prisma Client.

### `npx prisma migrate deploy`

Applies all pending migrations to the database in production or staging environments.

### `npx prisma studio`

Opens Prisma Studio, a visual editor for your database data.

### `npx prisma format`

Formats your `schema.prisma` file.

### `npx prisma validate`

Validates your Prisma schema.

### `npx prisma db seed`

Runs the seeding script specified in your `package.json` to populate your database with initial data.

## Usage

1. Define your data model in `prisma/schema.prisma`
2. Generate Prisma Client:
   ```
   npx prisma generate
   ```
3. Use Prisma Client in your application code to interact with your database.

For more detailed information, refer to the [Prisma documentation](https://www.prisma.io/docs/).
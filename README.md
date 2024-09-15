# Prisma Demo Project

This project demonstrates the use of Prisma ORM with TypeScript, Node and PostgreSQL to build a simple TODO application.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Configure your database connection in `.env`:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/your_database"
   ```

3. Apply database migrations:
   ```
   npx prisma migrate dev
   ```

4. Generate Prisma client:
   ```
   npx prisma generate
   ```

## Project Structure

- `prisma/schema.prisma`: Defines the data model
- `src/index.ts`: Main application file 

## Key Concepts

1. **ORM (Object-Relational Mapping)**: Prisma abstracts database operations, allowing you to work with JavaScript objects instead of SQL queries.

2. **Schema Definition**: The `schema.prisma` file defines your data model and relationships between tables.

3. **Migrations**: Prisma automatically generates and applies database migrations based on your schema changes.

4. **Prisma Client**: Auto-generated TypeScript client for type-safe database queries.

5. **Relationships**: Defined in the schema (e.g., User has many Todos).

## Useful Commands

- Compile the src: `tsc -b`
- Run the app: `node dist/index.js`
- Run Prisma Studio (GUI for database): `npx prisma studio`
- Create a new migration: `npx prisma migrate dev --name <migration_name>`

## Tips

- Use the Prisma VS Code extension for better schema visualization.
- Make sure to install Typescript compiler.
- To see SQL queries, add `log: ['query']` to your PrismaClient configuration.
- Regularly update your schema and run migrations as your data model evolves.

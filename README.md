
making the schema.prisma file only makes the database schema, it doesn't actually create the database. 

to create the database you need to run the sql query, we do that here by running the command `npx prisma migrate dev --name init`
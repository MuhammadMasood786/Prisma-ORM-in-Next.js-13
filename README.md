# Prisma-ORM-in-Next.js-13
Setup Prisma ORM in Next.js 13 with sqlite 

Packages
yarn add @prisma/client
yarn add -D prisma

yarn prisma init --datasource-provider sqlite
we’ll use SQLite instead of setting up a Postgres or MySQL database.

yarn prisma migrate dev --name init
Prisma will create a unique migration for our schema and apply the changes to the connected database.

yarn prisma db seed
you can seed the database with the test user.


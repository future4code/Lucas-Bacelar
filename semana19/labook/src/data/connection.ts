import dotenv from 'dotenv'
import { default as knex, default as Knex } from 'knex'

dotenv.config()

export const connection: Knex = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: 3306,
    multipleStatements: true,
  },
})

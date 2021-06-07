import dotenv from 'dotenv'
import knex from 'knex'

dotenv.config()
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env

export const connection = knex({
  client: 'mysql',
  connection: {
    host: DB_HOST,
    port: Number(DB_PORT) || 3306,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    multipleStatements: true,
  },
})

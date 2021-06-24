import dotenv from 'dotenv'
import { default as knex } from 'knex'

dotenv.config()

export class DatabaseConnection {
  protected static connection: knex = knex({
    client: 'mysql',
    connection: {
      host: String(process.env.DB_HOST),
      user: String(process.env.DB_USER),
      password: String(process.env.DB_PASSWORD),
      database: String(process.env.DB_SCHEMA),
      port: 3306,
      multipleStatements: true,
    },
  })

  protected static destroy() {
    knex({
      client: 'mysql',
      connection: {
        host: String(process.env.DB_HOST),
        user: String(process.env.DB_USER),
        password: String(process.env.DB_PASSWORD),
        database: String(process.env.DB_SCHEMA),
        port: 3306,
        multipleStatements: true,
      },
    }).destroy()
  }
}

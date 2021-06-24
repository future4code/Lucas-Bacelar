import { DatabaseConnection } from './DatabaseConnection'

class DatabaseMigrator extends DatabaseConnection {
  async connect(sql: string) {
    DatabaseConnection.connection(sql)
  }

  async destroy() {
    DatabaseConnection.destroy()
  }
}

const migrator = new DatabaseMigrator()

migrator
  .connect(
    `
      CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id) ON DELETE CASCADE ON UPDATE CASCADE
      );

      CREATE TABLE IF NOT EXISTS labook_friendship(
         user_id VARCHAR(255) NOT NULL,
         friend_id VARCHAR(255) NOT NULL,
         PRIMARY KEY(user_id, friend_id),
         FOREIGN KEY (user_id) REFERENCES labook_users(id) ON DELETE CASCADE ON UPDATE CASCADE,
         FOREIGN KEY (friend_id) REFERENCES labook_users(id) ON DELETE CASCADE ON UPDATE CASCADE
      );

      CREATE TABLE IF NOT EXISTS labook_likes(
         user_id VARCHAR(255) NOT NULL,
         post_id VARCHAR(255) NOT NULL,
         PRIMARY KEY(user_id, post_id),
         FOREIGN KEY (user_id) REFERENCES labook_users(id) ON DELETE CASCADE ON UPDATE CASCADE,
         FOREIGN KEY (post_id) REFERENCES labook_posts(id) ON DELETE CASCADE ON UPDATE CASCADE
      );

      CREATE TABLE IF NOT EXISTS labook_comments (
         id VARCHAR(255) NOT NULL PRIMARY KEY,
         user_id VARCHAR(255) NOT NULL,
         post_id VARCHAR(255) NOT NULL,
         description TEXT NOT NULL,
         FOREIGN KEY (user_id) REFERENCES labook_users (id) ON DELETE CASCADE ON UPDATE CASCADE,
         FOREIGN KEY (post_id) REFERENCES labook_posts (id) ON DELETE CASCADE ON UPDATE CASCADE
     );
   `
  )
  .then(() => {
    console.log('Successful Migration!')
    migrator.destroy()
  })
  .catch((error) => {
    console.log('A error ocurred:', error.sqlMessage || error.message)
    migrator.destroy()
  })

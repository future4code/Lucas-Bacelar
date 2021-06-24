import { DatabaseConnection } from './DatabaseConnection'

class DatabaseSeeder extends DatabaseConnection {
  async connect(sql: string) {
    DatabaseConnection.connection(sql)
  }

  async destroy() {
    DatabaseConnection.destroy()
  }
}

const seeder = new DatabaseSeeder()

seeder
  .connect(
    `
    INSERT INTO labook_users 
      (id, name, email, password)
    VALUES 
      ('001', 'Tom', 'tom@tom.com', '1234567'), 
      ('002', 'Sally', 'sally@sally.com', '2525252'), 
      ('003', 'Lucas', 'lucas@lucas.com', '3938373'),
      ('004', 'John', 'john@john.com', '1232267'),
      ('005', 'Math', 'math@math.com', '1235567');
      
    INSERT INTO labook_posts
      (id, photo, description, type, author_id)
    VALUES 
      ('101', 'www.random.com/011', 'random post 001', 'normal', '001'), 
      ('102', 'www.random.com/012', 'random post 002', 'normal', '001'), 
      ('103', 'www.random.com/013', 'random post 003', 'normal', '003'),
      ('104', 'www.random.com/014', 'random post 004', 'normal', '004'),
      ('105', 'www.random.com/015', 'random post 005', 'normal', '005'),
      ('201', 'www.random.com/021', 'random post 011', 'normal', '003'), 
      ('202', 'www.random.com/022', 'random post 012', 'normal', '004'), 
      ('203', 'www.random.com/023', 'random post 013', 'event', '001'),
      ('204', 'www.random.com/024', 'random post 014', 'event', '002'),
      ('205', 'www.random.com/025', 'random post 015', 'event', '005');
      
    INSERT INTO labook_comments
      (id, user_id, post_id, description)
    VALUES 
      ('301', '001', '101', 'Very nice'),
      ('302', '003', '103', 'Bad'), 
      ('303', '003', '102', 'Meh'), 
      ('304', '004', '102', 'Loved'), 
      ('305', '002', '101', 'Awesome');
      
    INSERT INTO labook_likes
      (user_id, post_id)
    VALUES 
      ('001', '101'),
      ('003', '103'), 
      ('003', '104'), 
      ('004', '104'), 
      ('002', '101');
   `
  )
  .then(() => {
    console.log('Successful Seeding!')
    seeder.destroy()
  })
  .catch((error) => {
    console.log('A error ocurred:', error.sqlMessage || error.message)
    seeder.destroy()
  })

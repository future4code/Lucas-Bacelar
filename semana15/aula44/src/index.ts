import cors from 'cors'
import express, { Request, Response } from 'express'

enum UserType {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL',
}

type User = {
  id: number
  name: string
  email: string
  type: UserType
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: 'Alice',
    email: 'alice@email.com',
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@email.com',
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: 'Coragem',
    email: 'coragem@email.com',
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: 'Dory',
    email: 'dory@email.com',
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: 'Elsa',
    email: 'elsa@email.com',
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: 'Fred',
    email: 'fred@email.com',
    type: UserType.ADMIN,
    age: 60,
  },
]

const app = express()
app.use(express.json())
app.use(cors())

app.get('/users', (req: Request, res: Response) => {
  res.status(200).send(users)
})

app.get('/users/search', (req: Request, res: Response) => {
  if (!req.query.type) {
    res.status(200).send(users)
  } else {
    const type = String(req.query.type).toUpperCase()
    let errorCode = 404

    try {
      if (!(type in UserType)) {
        throw new Error(
          'The type passed is invalid, please pass a valid type e.g: ADMIN OR NORMAL'
        )
      }

      const result = users.filter((user) => {
        return user.type === type
      })

      if (result.length === 0) {
        throw new Error("We don't found users with this type")
      }

      res.status(200).send(result)
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
  }
})

app.get('/users/:name', (req: Request, res: Response) => {
  const name = String(req.params.name)
  let errorCode = 404

  try {
    const result = users.find((user) => {
      return user.name === name
    })

    if (!result) {
      throw new Error("We don't found a user with this name")
    }

    res.status(200).send(result)
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
})

app.post('/users', (req: Request, res: Response) => {
  const { id, name, email, type, age } = req.body
  let errorCode = 400

  try {
    let regex = /\S+@\S+\.\S+/

    const nameExist = users.some((user) => user.name === name)
    if (nameExist) {
      errorCode = 409
      throw new Error('The name of the user already exist')
    } else if (isNaN(Number(age)) || Number(age) < 1) {
      throw new Error('Age must be a valid number')
    } else if (!(String(type).toUpperCase() in UserType)) {
      throw new Error('Please enter a valid type e.g: Admin or Normal')
    } else if (typeof email !== 'string' || !regex.test(email)) {
      throw new Error('Please enter a valid email')
    }

    const maxId = users.length > 0 ? Math.max(...users.map((n) => n.id)) : 0

    const newUser: User = {
      id: maxId + 1,
      name,
      email,
      type,
      age,
    }

    users = [...users, newUser]
    res.status(201).send(newUser)
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
})

// Para testar se o servidor está tratando os endpoints corretamente
app.get('/ping', (req: Request, res: Response) => {
  res.status(200).send('pong!')
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

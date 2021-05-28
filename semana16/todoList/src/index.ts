import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import app from './app'
import connection from './connection'

type User = {
  id: string
  name: string
  nickname: string
  email: string
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!')
})

app.put('/user', async (req: Request, res: Response) => {
  try {
    const name: string = String(req.body.name)
    const nickname: string = String(req.body.nickname)
    const email: string = String(req.body.email)

    if (!name || !nickname || !email) {
      throw new Error(
        "Nenhum campo pode está vázio, e.g: name: 'tal', nickname:'tal', email:'tal@tal.com'"
      )
    }

    const newUser: User = {
      id: uuidv4(),
      name,
      nickname,
      email,
    }

    await connection('TodoListUser').insert(newUser)
    res.status(201).send(newUser)
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

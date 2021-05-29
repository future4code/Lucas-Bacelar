import express, { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import connection from '../connection'
import { inputValido, todosValidos } from '../utils/api_helper'

const userRouter = express.Router()

type User = {
  id: string
  name: string
  nickname: string
  email: string
}

const userTable = () => connection<User>('TodoListUser')

userRouter.get('/all', async (req: Request, res: Response) => {
  try {
    const result = await userTable().select()
    res.status(200).send({ users: result })
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const query: string = String(req.query.query)

    if (!inputValido(query)) {
      throw new Error('Por favor coloque uma query válida')
    }

    const result = await userTable()
      .where('email', 'like', `%${query}%`)
      .orWhere('nickname', 'like', `%${query}%`)
      .select('id', 'nickname')

    res.status(200).send({ users: result })
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

userRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    if (!inputValido(id)) {
      throw new Error('Por favor coloque um id válido')
    }

    const result = await userTable().where('id', id)
    if (result.length === 0) {
      throw new Error('O usuário não foi encontrado')
    }

    res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

userRouter.put('/', async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body

    if (!todosValidos([name, nickname, email])) {
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

    await userTable().insert(newUser)
    res.status(201).send(newUser)
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

userRouter.post('/edit/:id', async (req: Request, res: Response) => {
  try {
    const { name, nickname, id } = req.body

    if (!todosValidos([name, nickname])) {
      throw new Error(
        "Nenhum campo pode está vázio, e.g: name: 'tal', nickname:'tal'"
      )
    } else if (!inputValido(id)) {
      throw new Error('Por favor coloque um id válido')
    }

    let editedUser = {
      ...(name && { name }),
      ...(nickname && { nickname }),
    }

    await userTable().where('id', id).update(editedUser)
    res.status(200).send(editedUser)
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

export default userRouter

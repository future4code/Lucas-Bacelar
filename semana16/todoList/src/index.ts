import dayjs from 'dayjs'
import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import app from './app'
import connection from './connection'

enum STATUS {
  TODO = 'to_do',
  DOING = 'doing',
  DONE = 'done',
}

type User = {
  id: string
  name: string
  nickname: string
  email: string
}

type Task = {
  id: string
  title: string
  description: string
  status: string
  limit_date: string
  creator_user_id: string
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

app.get('/user/:id', async (req: Request, res: Response) => {
  try {
    const id: string = String(req.params.id)
    if (!id) {
      throw new Error('Por favor coloque um id válido')
    }

    const result = await connection('TodoListUser').where('id', id)
    if (result.length === 0) {
      throw new Error('O usuário não foi encontrado')
    }

    res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

app.post('/user/edit/:id', async (req: Request, res: Response) => {
  try {
    const name: string = String(req.body.name)
    const nickname: string = String(req.body.nickname)
    const id: string = String(req.params.id)

    if (!name || !nickname) {
      throw new Error(
        "Nenhum campo pode está vázio, e.g: name: 'tal', nickname:'tal'"
      )
    } else if (!id) {
      throw new Error('Por favor coloque um id válido')
    }

    let editedUser = {
      ...(name !== 'undefined' && { name }),
      ...(nickname !== 'undefined' && { nickname }),
    }

    await connection('TodoListUser').where('id', id).update(editedUser)
    res.status(200).send(editedUser)
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

app.put('/task', async (req: Request, res: Response) => {
  try {
    const title: string = String(req.body.title)
    const description: string = String(req.body.description)
    const limitDate: string = String(req.body.limitDate)
    const creatorUserId: string = String(req.body.creatorUserId)

    const dayjsDate = dayjs(limitDate, 'DD/MM/YYYY')

    if (
      !stringValida(title) ||
      !stringValida(description) ||
      !stringValida(limitDate) ||
      !stringValida(creatorUserId)
    ) {
      throw new Error(
        'Não pode haver nenhum campo vazio e.g title: "Movie", description: "something", limitDate: "10/05/2022", creatorUserId: "001" '
      )
    } else if (!dataValida(dayjsDate)) {
      throw new Error('Coloque uma data válida e.g 11/04/2022(DD/MM/YYYY)')
    } else if (dayjsDate.valueOf() < Date.now()) {
      throw new Error('Por favor coloque a data presente ou uma data futura')
    }

    const newTask = {
      id: uuidv4(),
      title,
      description,
      status: STATUS.TODO,
      limit_date: dayjsDate.format('YYYY-MM-DD'),
      creator_user_id: creatorUserId,
    }

    await connection('TodoListTask').insert(newTask)
    res.status(201).send(newTask)
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

app.get('/task/:id', async (req: Request, res: Response) => {
  try {
    const id: string = String(req.params.id)

    if (!id) {
      throw new Error('Por favor coloque um id válido')
    }

    const result = await connection('TodoListTask').where('id', id)
    if (result.length === 0) {
      throw new Error('A tarefa não foi encontrada')
    }

    res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

function dataValida(dayjsDate: dayjs.Dayjs) {
  return dayjsDate.isValid()
}

function stringValida(input: string): boolean {
  if (input === 'undefined' || !input) {
    return false
  }
  return true
}

import dayjs from 'dayjs'
import express, { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import connection from '../connection'
import { dataValida, inputValido, todosValidos } from '../utils/api_helper'

const taskRouter = express.Router()

type Task = {
  id: string
  title: string
  description: string
  status: string
  limit_date: string
  creator_user_id: string
}

const taskTable = () => connection<Task>('TodoListTask as task')

enum STATUS {
  TODO = 'to_do',
  DOING = 'doing',
  DONE = 'done',
}

taskRouter.get('/', async (req: Request, res: Response) => {
  try {
    const creatorUserId: string = String(req.query.creatorUserId)
    console.log('userId', creatorUserId)

    if (!inputValido(creatorUserId)) {
      throw new Error('Por favor coloque um creatorUserId válido')
    }

    const result = await taskTable()
      .join('TodoListUser as user', 'task.creator_user_id', '=', 'user.id')
      .where('task.creator_user_id', creatorUserId)
      .select(
        'task.id as taskId',
        'task.title',
        'task.description',
        'task.limit_date as limitDate',
        'task.creator_user_id as creatorUserId',
        'task.status',
        'user.nickname as creatorUserNickname'
      )

    res.status(200).send({ tasks: result })
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

taskRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id

    if (!inputValido(id)) {
      throw new Error('Por favor coloque um id válido')
    }

    const result = await taskTable().where('id', id)
    if (result.length === 0) {
      throw new Error('A tarefa não foi encontrada')
    }

    res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

taskRouter.put('/', async (req: Request, res: Response) => {
  try {
    const { title, description, limitDate, creatorUserId } = req.body
    const dayjsDate = dayjs(limitDate, 'DD/MM/YYYY')

    if (!todosValidos([title, description, limitDate, creatorUserId])) {
      throw new Error(
        'Não pode haver nenhum campo vazio e.g title: "Movie", description: "something", limitDate: "10/05/2022", creatorUserId: "001" '
      )
    } else if (!dataValida(dayjsDate)) {
      throw new Error('Coloque uma data válida e.g 11/04/2022(DD/MM/YYYY)')
    } else if (dayjsDate.valueOf() < Date.now()) {
      throw new Error('Por favor coloque a data presente ou uma data futura')
    }

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      status: STATUS.TODO,
      limit_date: dayjsDate.format('YYYY-MM-DD'),
      creator_user_id: creatorUserId,
    }

    await taskTable().insert(newTask)
    res.status(201).send(newTask)
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
})

export default taskRouter

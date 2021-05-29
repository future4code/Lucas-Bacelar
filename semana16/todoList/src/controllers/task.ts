import dayjs from 'dayjs'
import { Request, Response } from 'express'
import connection from '../connection'
import {
  dataValida,
  gerarId,
  inputValido,
  todosValidos,
} from '../utils/api_helper'

type Task = {
  id: string
  title: string
  description: string
  status: string
  limit_date: string
  creator_user_id: string
}

type ResponsibleUser = {
  task_id: string
  responsible_user_id: string
}

enum STATUS {
  TODO = 'to_do',
  DOING = 'doing',
  DONE = 'done',
}

const taskTable = () => connection<Task>('TodoListTask')
const responsibleUserTable = () =>
  connection<ResponsibleUser>('TodoListResponsibleUserTaskRelation')

async function getTaskByCreatorId(req: Request, res: Response): Promise<any> {
  try {
    const creatorUserId: string = String(req.query.creatorUserId)
    console.log('userId', creatorUserId)

    if (!inputValido(creatorUserId)) {
      throw new Error('Por favor coloque um creatorUserId válido')
    }

    const result = await taskTable()
      .join(
        'TodoListUser as user',
        'TodoListTask.creator_user_id',
        '=',
        'user.id'
      )
      .where('TodoListTask.creator_user_id', creatorUserId)
      .select(
        'TodoListTask.id as taskId',
        'TodoListTask.title',
        'TodoListTask.description',
        'TodoListTask.limit_date as limitDate',
        'TodoListTask.creator_user_id as creatorUserId',
        'TodoListTask.status',
        'user.nickname as creatorUserNickname'
      )

    res.status(200).send({ tasks: result })
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
}

async function getTaskById(req: Request, res: Response): Promise<any> {
  try {
    const id: string = req.params.id

    if (!inputValido(id)) {
      throw new Error('Por favor coloque um id válido')
    }

    const result = await taskTable().where('id', id)
    if (result.length === 0) {
      throw new Error('A tarefa não foi encontrada')
    }

    const responsibleUsers = await responsibleUserTable()
      .join('TodoListUser', 'responsible_user_id', '=', 'TodoListUser.id')
      .select('TodoListUser.id', 'TodoListUser.nickname')
      .where('task_id', id)

    res.status(200).send({ ...result[0], ...{ responsibleUsers } })
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
}

async function createTask(req: Request, res: Response): Promise<any> {
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
      id: gerarId(),
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
}

async function assignTask(req: Request, res: Response): Promise<any> {
  try {
    const { task_id, responsible_user_id } = req.body

    if (!todosValidos([task_id, responsible_user_id])) {
      throw new Error(
        'Todos os campos precisam ser preenchidos e.g "task_id": "astrodev", "responsible_user_id": "astrodev"'
      )
    }

    const newResponsibleUser: ResponsibleUser = {
      task_id,
      responsible_user_id,
    }

    await responsibleUserTable().insert(newResponsibleUser)

    res.status(201).send(newResponsibleUser)
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
}

async function taskResponsibles(req: Request, res: Response): Promise<any> {
  try {
    const id: string = req.params.id
    if (!inputValido(id)) {
      throw new Error('Por favor coloque um id válido')
    }

    const taskExiste = await taskTable().where('id', id)
    if (taskExiste.length === 0) {
      throw new Error('Não existe nenhuma tarefa com o id passado')
    }

    const result = await responsibleUserTable()
      .join('TodoListUser', 'responsible_user_id', '=', 'TodoListUser.id')
      .select('TodoListUser.id', 'TodoListUser.nickname')
      .where('task_id', id)

    res.status(200).send({ users: result })
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
}

export default {
  getTaskByCreatorId,
  getTaskById,
  createTask,
  assignTask,
  taskResponsibles,
}

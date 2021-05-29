import { Request, Response } from 'express'
import connection from '../connection'
import { gerarId, inputValido, todosValidos } from '../utils/api_helper'

type User = {
  id: string
  name: string
  nickname: string
  email: string
}

const userTable = () => connection<User>('TodoListUser')

async function getAllUsers(req: Request, res: Response): Promise<any> {
  try {
    const result = await userTable().select()
    res.status(200).send({ users: result })
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
}

async function searchUser(req: Request, res: Response): Promise<any> {
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
}

async function searchUserById(req: Request, res: Response): Promise<any> {
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
}

async function createUser(req: Request, res: Response): Promise<any> {
  try {
    const { name, nickname, email } = req.body

    if (!todosValidos([name, nickname, email])) {
      throw new Error(
        "Nenhum campo pode está vázio, e.g: name: 'tal', nickname:'tal', email:'tal@tal.com'"
      )
    }

    const newUser: User = {
      id: gerarId(),
      name,
      nickname,
      email,
    }

    await userTable().insert(newUser)
    res.status(201).send(newUser)
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message })
  }
}

async function editUser(req: Request, res: Response): Promise<any> {
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
}

export default { getAllUsers, searchUser, searchUserById, createUser, editUser }

import { Request, Response } from 'express'
import User from '../queries/users'
import { Direction, OrderValues, UserType } from '../types/user'

async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await User.selectAllUsers()

    if (!users.length) {
      res.statusCode = 404
      throw new Error('No users found')
    }

    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

async function filterByName(req: Request, res: Response): Promise<void> {
  try {
    const name: string = req.query.name as string

    if (!name) {
      res.statusCode = 404
      throw new Error('Por favor coloque um nome válido')
    }

    const users = await User.filterByName(name)

    if (!users.length) {
      res.statusCode = 404
      throw new Error('No users found')
    }

    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

async function filterByType(req: Request, res: Response): Promise<void> {
  try {
    const type: string = req.query.type as string

    if (!type) {
      res.statusCode = 404
      throw new Error('Por favor coloque um tipo válido')
    }

    const users = await User.filterByType(type)

    if (!users.length) {
      res.statusCode = 404
      throw new Error('No users found')
    }

    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

async function orderUsers(req: Request, res: Response): Promise<void> {
  try {
    const orderBy: string = req.query.orderBy as string
    const direction: string = req.query.direction
      ? String(req.query.direction).toUpperCase()
      : 'DESC'

    if (
      !orderBy ||
      !Object.values(OrderValues).includes(orderBy as OrderValues) ||
      !Object.values(Direction).includes(direction as Direction)
    ) {
      res.statusCode = 404
      throw new Error(
        'Por favor coloque um valor de ordenação e direção válido e.g: orderBy = "name" ou "email", direction = "DESC" ou "ASC"'
      )
    }

    const users = await User.orderUsers(orderBy, direction)

    if (!users.length) {
      res.statusCode = 404
      throw new Error('No users found')
    }

    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

async function paginateUsers(req: Request, res: Response): Promise<void> {
  try {
    const page: number = Number(req.query.page)

    if (isNaN(page)) {
      res.statusCode = 404
      throw new Error('Por favor coloque um valor válido em page e.g page=1')
    }

    const users = await User.paginateUsers(page)

    if (!users.length) {
      res.statusCode = 404
      throw new Error('No users found')
    }

    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

async function searchUsers(req: Request, res: Response): Promise<void> {
  try {
    const query = req.query

    const name: string = query.name ? (query.name as string) : ''
    const type: string = query.type ? (query.type as string) : ''

    const orderBy: string = query.orderBy ? (query.orderBy as string) : 'email'
    const direction: string = query.direction
      ? String(query.direction).toUpperCase()
      : 'DESC'

    const page: number = query.page ? Number(query.page) : 1

    if (!Object.values(UserType).includes(type as UserType) && type) {
      throw new Error(
        "Por favor coloque um valor de tipo válido e.g type = 'CX' ou 'Teacher'"
      )
    } else if (!Object.values(OrderValues).includes(orderBy as OrderValues)) {
      throw new Error(
        "Por favor coloque um valor de tipo de ordenação válido e.g orderBy = 'name', 'type' ou 'email'"
      )
    } else if (!Object.values(Direction).includes(direction as Direction)) {
      throw new Error(
        "Por favor coloque a ordem corretamente e.g direction = 'ASC' ou 'DESC'"
      )
    } else if (isNaN(page)) {
      res.statusCode = 404
      throw new Error('Por favor coloque um valor válido em page e.g page=1')
    }

    const users = await User.searchUsers(name, type, orderBy, direction, page)

    if (!users.length) {
      res.statusCode = 404
      throw new Error('No users found')
    }

    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

export const userController = {
  getAllUsers,
  filterByName,
  filterByType,
  orderUsers,
  paginateUsers,
  searchUsers,
}

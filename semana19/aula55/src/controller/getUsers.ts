import { Request, Response } from 'express'
import { getAllUsers } from '../business/userBusiness'
export async function getUsers(req: Request, res: Response) {
  try {
    const token: string = req.headers.authorization as string
    const users = await getAllUsers(token)

    res.status(200).send(users)
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

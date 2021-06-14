import { Request, Response } from 'express'
import * as userBusiness from '../business/userBusiness'
import { UserData } from '../models/User'

export async function Signup(req: Request, res: Response) {
  try {
    const input: UserData = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      role: req.body.role,
    }

    const token = await userBusiness.createUser(input)

    res.status(200).send({ token })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

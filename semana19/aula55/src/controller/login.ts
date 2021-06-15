import { Request, Response } from 'express'
import * as userBusiness from '../business/userBusiness'
import { UserLogin } from '../models/User'

export async function Login(req: Request, res: Response) {
  try {
    const loginData: UserLogin = {
      email: req.body.email,
      password: req.body.password,
    }

    const token = await userBusiness.loginUser(loginData)

    res.status(200).send({ token })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

import { NextFunction, Request, Response } from 'express'
import * as userBusiness from '../business/userBusiness'
import {
  loginInputDTO,
  loginOutputDTO,
  signupInputDTO,
  signupOutputDTO,
} from '../model/UserModel'

export async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    const signupInput: signupInputDTO = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }

    const { message, token }: signupOutputDTO = await userBusiness.createUser(
      signupInput
    )

    res.status(201).send({ message, token })
  } catch (error) {
    next(error)
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const loginInput: loginInputDTO = {
      email: req.body.email,
      password: req.body.password,
    }

    const { message, token }: loginOutputDTO =
      await userBusiness.authenticateUser(loginInput)

    res.status(200).send({ message, token })
  } catch (error) {
    next(error)
  }
}

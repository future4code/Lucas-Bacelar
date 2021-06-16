import { NextFunction, Request, Response, Router } from 'express'
import * as userController from '../controller/userController'
import { connection } from '../data/connection'
import { signupInputDTO, signupOutputDTO, user } from '../model/UserModel'
import { Authentication } from '../services/authentication'
import { HashManager } from '../services/hashManager'

const userRouter = Router()

userRouter.post(
  '/signup',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const signupInput: signupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }

      const { message, token }: signupOutputDTO =
        await userController.createUser(signupInput)

      res.status(201).send({ message, token })
    } catch (error) {
      next(error)
    }
  }
)

userRouter.post(
  '/login',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let message = 'Success!'

      const { email, password } = req.body

      if (!email || !password) {
        res.statusCode = 406
        message = '"email" and "password" must be provided'
        throw new Error(message)
      }

      const queryResult: any = await connection('labook_users')
        .select('*')
        .where({ email })

      if (!queryResult[0]) {
        res.statusCode = 401
        message = 'Invalid credentials'
        throw new Error(message)
      }

      const user: user = {
        id: queryResult[0].id,
        name: queryResult[0].name,
        email: queryResult[0].email,
        password: queryResult[0].password,
      }

      const passwordIsCorrect: boolean = await HashManager.compare(
        password,
        user.password
      )

      if (!passwordIsCorrect) {
        res.statusCode = 401
        message = 'Invalid credentials'
        throw new Error(message)
      }

      const token: string = Authentication.generateToken({
        id: user.id,
      })

      res.status(200).send({ message, token })
    } catch (error) {
      next(error)
    }
  }
)

export default userRouter

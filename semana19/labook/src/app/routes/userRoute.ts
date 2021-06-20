import { NextFunction, Request, Response, Router } from 'express'
import { authenticateUserController } from '../useCases/AuthenticateUser'
import { createUserController } from '../useCases/CreateUser'

const userRouter = Router()

userRouter.post(
  '/signup',
  (req: Request, res: Response, next: NextFunction) => {
    return createUserController.handle(req, res, next)
  }
)

userRouter.post('/login', (req: Request, res: Response, next: NextFunction) => {
  return authenticateUserController.handle(req, res, next)
})

export default userRouter

import { NextFunction, Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

export class AuthenticateUserController {
  constructor(private AuthenticateUserUseCase: AuthenticateUserUseCase) {}
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { email, password } = req.body

    try {
      const response = await this.AuthenticateUserUseCase.execute({
        email,
        password,
      })

      return res.status(200).send(response)
    } catch (err) {
      next(err)
    }
  }
}

import { NextFunction, Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor(private CreateUserUseCase: CreateUserUseCase) {}
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { name, email, password } = req.body

    try {
      const response = await this.CreateUserUseCase.execute({
        name,
        email,
        password,
      })

      return res.status(201).send(response)
    } catch (err) {
      next(err)
    }
  }
}

import { NextFunction, Request, Response } from 'express'
import { CreatePostUseCase } from './CreatePostUseCase'

export class CreatePostController {
  constructor(private CreatePostUseCase: CreatePostUseCase) {}
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { photo, description, type } = req.body
    const token = req.headers.authorization

    try {
      const response = await this.CreatePostUseCase.execute({
        photo,
        description,
        type,
        token,
      })

      return res.status(201).send(response)
    } catch (err) {
      next(err)
    }
  }
}

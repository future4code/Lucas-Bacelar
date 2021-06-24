import { NextFunction, Request, Response } from 'express'
import { CommentPostUseCase } from './CommentPostUseCase'

export class CommentPostController {
  constructor(private CommentPostUseCase: CommentPostUseCase) {}
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const post_id = req.params.id
    const description = req.body.description
    const token = req.headers.authorization

    try {
      const response = await this.CommentPostUseCase.execute({
        post_id,
        token,
        description,
      })

      return res.status(201).send(response)
    } catch (err) {
      next(err)
    }
  }
}

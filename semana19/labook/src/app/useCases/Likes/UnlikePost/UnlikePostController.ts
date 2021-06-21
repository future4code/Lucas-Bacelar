import { NextFunction, Request, Response } from 'express'
import { UnlikePostUseCase } from './UnlikePostUseCase'

export class UnlikePostController {
  constructor(private UnlikePostUseCase: UnlikePostUseCase) {}
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const post_id = req.params.id
    const token = req.headers.authorization

    try {
      const response = await this.UnlikePostUseCase.execute({
        post_id,
        token,
      })

      return res.status(204).send(response)
    } catch (err) {
      next(err)
    }
  }
}

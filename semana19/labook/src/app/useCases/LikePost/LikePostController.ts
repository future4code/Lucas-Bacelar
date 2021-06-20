import { NextFunction, Request, Response } from 'express'
import { LikePostUseCase } from './LikePostUseCase'

export class LikePostController {
  constructor(private LikePostUseCase: LikePostUseCase) {}
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const post_id = req.params.id
    const token = req.headers.authorization

    try {
      const response = await this.LikePostUseCase.execute({
        post_id,
        token,
      })

      return res.status(201).send(response)
    } catch (err) {
      next(err)
    }
  }
}

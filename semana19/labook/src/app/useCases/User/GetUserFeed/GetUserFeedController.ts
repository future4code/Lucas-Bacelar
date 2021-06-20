import { NextFunction, Request, Response } from 'express'
import { GetUserFeedUseCase } from './GetUserFeedUseCase'

export class GetUserFeedController {
  constructor(private GetUserFeedUseCase: GetUserFeedUseCase) {}
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const token = req.headers.authorization
    const type = req.query.type || 'normal'
    const page = req.query.page || 1

    try {
      const response = await this.GetUserFeedUseCase.execute({
        token,
        type,
        page,
      })

      return res.status(200).send(response)
    } catch (err) {
      next(err)
    }
  }
}

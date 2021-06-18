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

    try {
      const response = await this.GetUserFeedUseCase.execute({
        token,
      })

      return res.status(200).send(response)
    } catch (err) {
      next(err)
    }
  }
}

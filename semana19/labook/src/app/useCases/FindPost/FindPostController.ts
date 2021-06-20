import { NextFunction, Request, Response } from 'express'
import { FindPostUseCase } from './FindPostUseCase'

export class FindPostController {
  constructor(private FindPostUseCase: FindPostUseCase) {}
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const token = req.headers.authorization
    const id = req.params.id

    try {
      const response = await this.FindPostUseCase.execute({
        token,
        id,
      })

      return res.status(200).send(response)
    } catch (err) {
      next(err)
    }
  }
}

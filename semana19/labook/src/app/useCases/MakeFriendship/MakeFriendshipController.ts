import { NextFunction, Request, Response } from 'express'
import { MakeFriendshipUseCase } from './MakeFriendshipUseCase'

export class MakeFriendshipController {
  constructor(private MakeFriendshipUseCase: MakeFriendshipUseCase) {}
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { friend_id } = req.body
    const token = req.headers.authorization

    try {
      const response = await this.MakeFriendshipUseCase.execute({
        friend_id,
        token,
      })

      return res.status(201).send(response)
    } catch (err) {
      next(err)
    }
  }
}

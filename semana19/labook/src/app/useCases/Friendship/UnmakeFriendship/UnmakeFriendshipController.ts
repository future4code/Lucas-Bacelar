import { NextFunction, Request, Response } from 'express'
import { UnmakeFriendshipUseCase } from './UnmakeFriendshipUseCase'

export class UnmakeFriendshipController {
  constructor(private UnmakeFriendshipUseCase: UnmakeFriendshipUseCase) {}
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { friend_id } = req.body
    const token = req.headers.authorization

    try {
      const response = await this.UnmakeFriendshipUseCase.execute({
        friend_id,
        token,
      })

      return res.status(204).send(response)
    } catch (err) {
      next(err)
    }
  }
}

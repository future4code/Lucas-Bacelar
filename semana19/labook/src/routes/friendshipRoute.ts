import { NextFunction, Request, Response, Router } from 'express'
import { makeFriendshipController } from '../useCases/MakeFriendship'
import { unmakeFriendshipController } from '../useCases/UnmakeFriendship'

const friendshipRouter = Router()

friendshipRouter.put(
  '/make',
  (req: Request, res: Response, next: NextFunction) => {
    return makeFriendshipController.handle(req, res, next)
  }
)

friendshipRouter.delete(
  '/unmake',
  (req: Request, res: Response, next: NextFunction) => {
    return unmakeFriendshipController.handle(req, res, next)
  }
)

export default friendshipRouter

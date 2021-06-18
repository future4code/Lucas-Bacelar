import { NextFunction, Request, Response, Router } from 'express'
import { createPostController } from '../useCases/CreatePost'
import { makeFriendshipController } from '../useCases/MakeFriendship'

const friendshipRouter = Router()

friendshipRouter.post(
  '/make',
  (req: Request, res: Response, next: NextFunction) => {
    return makeFriendshipController.handle(req, res, next)
  }
)

friendshipRouter.delete(
  '/unmake',
  (req: Request, res: Response, next: NextFunction) => {
    return createPostController.handle(req, res, next)
  }
)

export default friendshipRouter

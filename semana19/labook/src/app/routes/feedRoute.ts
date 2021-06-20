import { NextFunction, Request, Response, Router } from 'express'
import { getUserFeedController } from '../useCases/User/GetUserFeed'

const feedRouter = Router()

feedRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  return getUserFeedController.handle(req, res, next)
})

export default feedRouter

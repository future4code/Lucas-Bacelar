import { NextFunction, Request, Response, Router } from 'express'
import { createPostController } from '../useCases/CreatePost'
import { findPostController } from '../useCases/FindPost'

const postRouter = Router()

postRouter.post(
  '/create',
  (req: Request, res: Response, next: NextFunction) => {
    return createPostController.handle(req, res, next)
  }
)

postRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  return findPostController.handle(req, res, next)
})

export default postRouter

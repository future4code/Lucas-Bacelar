import { NextFunction, Request, Response, Router } from 'express'
import { commentPostController } from '../useCases/Comment/CommentPost'
import { likePostController } from '../useCases/Likes/LikePost'
import { unlikePostController } from '../useCases/Likes/UnlikePost'
import { createPostController } from '../useCases/Post/CreatePost'
import { findPostController } from '../useCases/Post/FindPost'

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

postRouter.post(
  '/:id/comments',
  (req: Request, res: Response, next: NextFunction) => {
    return commentPostController.handle(req, res, next)
  }
)

postRouter.put(
  '/:id/likes',
  (req: Request, res: Response, next: NextFunction) => {
    return likePostController.handle(req, res, next)
  }
)

postRouter.delete(
  '/:id/likes',
  (req: Request, res: Response, next: NextFunction) => {
    return unlikePostController.handle(req, res, next)
  }
)

export default postRouter

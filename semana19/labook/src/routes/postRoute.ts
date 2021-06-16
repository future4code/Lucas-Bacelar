import { Router } from 'express'
import { createPost, searchPost } from '../controller/postController'

const postRouter = Router()

postRouter.post('/create', createPost)

postRouter.get('/:id', searchPost)

export default postRouter

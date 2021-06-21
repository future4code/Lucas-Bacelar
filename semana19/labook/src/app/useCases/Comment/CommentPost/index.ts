import { MySqlCommentsRepository } from '../../../repositories/implementations/MySqlCommentsRepository'
import { CommentPostController } from './CommentPostController'
import { CommentPostUseCase } from './CommentPostUseCase'
import { CommentPostValidator } from './CommentPostValidator'

const mysqlCommentsRepository = new MySqlCommentsRepository()
const commentPostValidator = new CommentPostValidator()

const CommentPostsUseCase = new CommentPostUseCase(
  mysqlCommentsRepository,
  commentPostValidator
)

const commentPostController = new CommentPostController(CommentPostsUseCase)

export { CommentPostsUseCase, commentPostController }

import { MySqlCommentsRepository } from '../../repositories/implementations/MySqlCommentsRepository'
import { CommentPostController } from './CommentPostController'
import { CommentPostUseCase } from './CommentPostUseCase'

const mysqlCommentsRepository = new MySqlCommentsRepository()

const CommentPostsUseCase = new CommentPostUseCase(mysqlCommentsRepository)

const commentPostController = new CommentPostController(CommentPostsUseCase)

export { CommentPostsUseCase, commentPostController }

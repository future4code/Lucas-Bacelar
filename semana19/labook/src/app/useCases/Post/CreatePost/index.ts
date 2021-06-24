import { MySqlPostsRepository } from '../../../repositories/implementations/MySqlPostsRepository'
import { CreatePostController } from './CreatePostController'
import { CreatePostUseCase } from './CreatePostUseCase'
import { CreatePostValidator } from './CreatePostValidator'

const mysqlPostsRepository = new MySqlPostsRepository()
const createPostValidator = new CreatePostValidator()

const createPostsUseCase = new CreatePostUseCase(
  mysqlPostsRepository,
  createPostValidator
)

const createPostController = new CreatePostController(createPostsUseCase)

export { createPostsUseCase, createPostController }

import { MySqlPostsRepository } from '../../repositories/implementations/MySqlPostsRepository'
import { CreatePostController } from './CreatePostController'
import { CreatePostUseCase } from './CreatePostUseCase'

const mysqlPostsRepository = new MySqlPostsRepository()

const createPostsUseCase = new CreatePostUseCase(mysqlPostsRepository)

const createPostController = new CreatePostController(createPostsUseCase)

export { createPostsUseCase, createPostController }

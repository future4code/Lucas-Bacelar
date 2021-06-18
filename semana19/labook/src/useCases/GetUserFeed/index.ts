import { MySqlPostsRepository } from '../../repositories/implementations/MySqlPostsRepository'
import { MySqlUsersRepository } from '../../repositories/implementations/MySqlUsersRepository'
import { GetUserFeedController } from './GetUserFeedController'
import { GetUserFeedUseCase } from './GetUserFeedUseCase'

const mysqlPostsRepository = new MySqlPostsRepository()
const mysqlUsersRepository = new MySqlUsersRepository()

const getUserFeedsUseCase = new GetUserFeedUseCase(
  mysqlPostsRepository,
  mysqlUsersRepository
)

const getUserFeedController = new GetUserFeedController(getUserFeedsUseCase)

export { getUserFeedsUseCase, getUserFeedController }

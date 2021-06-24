import { MySqlPostsRepository } from '../../../repositories/implementations/MySqlPostsRepository'
import { MySqlUsersRepository } from '../../../repositories/implementations/MySqlUsersRepository'
import { GetUserFeedController } from './GetUserFeedController'
import { GetUserFeedUseCase } from './GetUserFeedUseCase'
import { GetUserFeedValidator } from './GetUserFeedValidator'

const mysqlPostsRepository = new MySqlPostsRepository()
const mysqlUsersRepository = new MySqlUsersRepository()
const getUserFeedValidator = new GetUserFeedValidator()

const getUserFeedsUseCase = new GetUserFeedUseCase(
  mysqlPostsRepository,
  mysqlUsersRepository,
  getUserFeedValidator
)

const getUserFeedController = new GetUserFeedController(getUserFeedsUseCase)

export { getUserFeedsUseCase, getUserFeedController }

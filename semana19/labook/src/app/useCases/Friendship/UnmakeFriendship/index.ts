import { MySqlFriendshipsRepository } from '../../../repositories/implementations/MySqlFriendshipsRepository'
import { UnmakeFriendshipController } from './UnmakeFriendshipController'
import { UnmakeFriendshipUseCase } from './UnmakeFriendshipUseCase'
import { UnmakeFriendshipValidator } from './UnmakeFriendshipValidator'

const mysqlFriendshipsRepository = new MySqlFriendshipsRepository()
const unmakeFriendshipValidator = new UnmakeFriendshipValidator()

const unmakeFriendshipsUseCase = new UnmakeFriendshipUseCase(
  mysqlFriendshipsRepository,
  unmakeFriendshipValidator
)

const unmakeFriendshipController = new UnmakeFriendshipController(
  unmakeFriendshipsUseCase
)

export { unmakeFriendshipsUseCase, unmakeFriendshipController }

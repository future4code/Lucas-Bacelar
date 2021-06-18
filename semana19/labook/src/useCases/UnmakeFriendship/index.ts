import { MySqlFriendshipsRepository } from '../../repositories/implementations/MySqlFriendshipsRepository'
import { UnmakeFriendshipController } from './UnmakeFriendshipController'
import { UnmakeFriendshipUseCase } from './UnmakeFriendshipUseCase'

const mysqlFriendshipsRepository = new MySqlFriendshipsRepository()

const unmakeFriendshipsUseCase = new UnmakeFriendshipUseCase(
  mysqlFriendshipsRepository
)

const unmakeFriendshipController = new UnmakeFriendshipController(
  unmakeFriendshipsUseCase
)

export { unmakeFriendshipsUseCase, unmakeFriendshipController }

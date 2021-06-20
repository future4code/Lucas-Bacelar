import { MySqlFriendshipsRepository } from '../../../repositories/implementations/MySqlFriendshipsRepository'
import { MakeFriendshipController } from './MakeFriendshipController'
import { MakeFriendshipUseCase } from './MakeFriendshipUseCase'

const mysqlFriendshipsRepository = new MySqlFriendshipsRepository()

const makeFriendshipsUseCase = new MakeFriendshipUseCase(
  mysqlFriendshipsRepository
)

const makeFriendshipController = new MakeFriendshipController(
  makeFriendshipsUseCase
)

export { makeFriendshipsUseCase, makeFriendshipController }

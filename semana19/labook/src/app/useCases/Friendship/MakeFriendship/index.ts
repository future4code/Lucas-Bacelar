import { MySqlFriendshipsRepository } from '../../../repositories/implementations/MySqlFriendshipsRepository'
import { MakeFriendshipController } from './MakeFriendshipController'
import { MakeFriendshipUseCase } from './MakeFriendshipUseCase'
import { MakeFriendshipValidator } from './MakeFriendshipValidator'

const mysqlFriendshipsRepository = new MySqlFriendshipsRepository()
const makeFriendshipValidator = new MakeFriendshipValidator()

const makeFriendshipsUseCase = new MakeFriendshipUseCase(
  mysqlFriendshipsRepository,
  makeFriendshipValidator
)

const makeFriendshipController = new MakeFriendshipController(
  makeFriendshipsUseCase
)

export { makeFriendshipsUseCase, makeFriendshipController }

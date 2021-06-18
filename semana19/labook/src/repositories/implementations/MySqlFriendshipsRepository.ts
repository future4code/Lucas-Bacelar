import { Friendship } from '../../entities/Friendship'
import { DatabaseConnection } from '../connection'
import { IFriendshipsRepository } from '../IFriendshipsRepository'

export class MySqlFriendshipsRepository
  extends DatabaseConnection
  implements IFriendshipsRepository
{
  private friendshipTable = DatabaseConnection.connection('labook_friendship')
  constructor() {
    super()
  }

  async befriend(friendship: Friendship): Promise<void> {
    await this.friendshipTable.insert(friendship)
  }

  async unfriend(friendship: Friendship): Promise<void> {
    await this.friendshipTable.delete().where(friendship)
  }

  async find(friendship: Friendship): Promise<Friendship> {
    const result = await this.friendshipTable.where(friendship)
    return result[0]
  }
}

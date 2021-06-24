import { DatabaseConnection } from '../../../database/DatabaseConnection'
import { Friendship } from '../../entities/Friendship'
import { IFriendshipsRepository } from '../IFriendshipsRepository'

export class MySqlFriendshipsRepository
  extends DatabaseConnection
  implements IFriendshipsRepository
{
  private friendshipTable = () =>
    DatabaseConnection.connection('labook_friendship')
  constructor() {
    super()
  }

  async befriend(friendship: Friendship): Promise<void> {
    await this.friendshipTable().insert(friendship)
  }

  async unfriend(friendship: Friendship): Promise<void> {
    await this.friendshipTable().delete().where(friendship)
  }

  async find(friendship: Friendship): Promise<Friendship> {
    const result = await this.friendshipTable()
      .where({
        user_id: friendship.user_id,
        friend_id: friendship.friend_id,
      })
      .orWhere({
        user_id: friendship.friend_id,
        friend_id: friendship.user_id,
      })
    return result[0]
  }
}

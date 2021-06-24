import { Friendship } from '../entities/Friendship'

export interface IFriendshipsRepository {
  befriend(friendship: Friendship): Promise<void>
  unfriend(friendship: Friendship): Promise<void>
  find(friendship: Friendship): Promise<Friendship>
}

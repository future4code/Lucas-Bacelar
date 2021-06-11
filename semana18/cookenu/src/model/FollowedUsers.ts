import connection from '../connection'
import { FollowUser } from '../types/FollowUser'

const followedUsersTable = () => connection('Cookenu_Followed_Users')

export class FollowedUsersTable {
  constructor() {}

  static async follow({
    follower_id,
    userToFollowId,
  }: FollowUser): Promise<void> {
    await followedUsersTable().insert({
      follower_id,
      followed_id: userToFollowId,
    })
  }

  static async isFollowed({
    follower_id,
    userToFollowId,
  }: FollowUser): Promise<boolean> {
    const result = await followedUsersTable().where({
      follower_id,
      followed_id: userToFollowId,
    })

    return result.length > 0 ? true : false
  }
}

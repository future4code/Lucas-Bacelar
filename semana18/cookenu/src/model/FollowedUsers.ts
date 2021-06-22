import connection from '../connection'
import { Follow, Unfollow } from '../types/FollowUser'

const followedUsersTable = () => connection('Cookenu_Followed_Users')

export class FollowedUsersTable {
  constructor() {}

  static async follow({ follower_id, userToFollowId }: Follow): Promise<void> {
    await followedUsersTable().insert({
      follower_id,
      followed_id: userToFollowId,
    })
  }

  static async unfollow({
    follower_id,
    userToUnfollowId,
  }: Unfollow): Promise<void> {
    await followedUsersTable().delete().where({
      follower_id,
      followed_id: userToUnfollowId,
    })
  }

  static async isFollowed({
    follower_id,
    userToFollowId,
  }: Follow): Promise<boolean> {
    const result = await followedUsersTable().where({
      follower_id,
      followed_id: userToFollowId,
    })

    return result.length > 0 ? true : false
  }

  static async isNotFollowed({
    follower_id,
    userToUnfollowId,
  }: Unfollow): Promise<any> {
    const followed = await FollowedUsersTable.isFollowed({
      follower_id,
      userToFollowId: userToUnfollowId,
    })
    return followed ? false : true
  }
}

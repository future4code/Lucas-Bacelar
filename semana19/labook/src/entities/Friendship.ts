export class Friendship {
  public readonly user_id!: string
  public readonly friend_id!: string

  constructor(props: Friendship) {
    Object.assign(this, props)
  }
}

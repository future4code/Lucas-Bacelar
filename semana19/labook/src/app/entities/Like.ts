export class Like {
  public readonly user_id!: string
  public readonly post_id!: string

  constructor(props: Like) {
    Object.assign(this, props)
  }
}

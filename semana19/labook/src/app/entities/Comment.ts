import { generateId } from '../services/generateId'

export class Comment {
  public readonly id!: string
  public readonly user_id!: string
  public readonly post_id!: string
  public description!: string

  constructor(props: Omit<Comment, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = generateId()
    }
  }
}

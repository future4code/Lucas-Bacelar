import { generateId } from '../services/generateId'
import { POST_TYPES } from '../types/Post'
export class Post {
  public readonly id!: string
  public readonly author_id!: string
  public readonly created_at!: string

  public photo!: string
  public description!: string
  public type!: POST_TYPES

  constructor(
    props: Omit<Post, 'id' | 'created_at'>,
    id?: string,
    created_at?: string
  ) {
    Object.assign(this, props)

    if (!id) {
      this.id = generateId()
    }
    if (!created_at) {
      this.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
    }
  }
}

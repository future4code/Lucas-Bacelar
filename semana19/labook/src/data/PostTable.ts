import { createPostDbInsertDTO, post } from '../model/PostModel'
import { connection } from './connection'

export class PostTable {
  static async createPost(post: createPostDbInsertDTO): Promise<void> {
    await connection('labook_posts').insert(post)
  }

  static async getPost(id: string): Promise<Array<post>> {
    const result: Array<post> = await connection('labook_posts').where({
      id,
    })
    return result
  }
}

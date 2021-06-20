import { Post } from '../../entities/Post'
import { IPostsRepository } from '../../repositories/IPostsRepository'
import { Authentication } from '../../services/Authentication'
import { errorAPI } from '../../services/ErrorAPI'
import { IFindPostRequestDTO, IFindPostResponseDTO } from './FindPostDTO'

export class FindPostUseCase {
  constructor(private postsRepository: IPostsRepository) {}
  async execute(data: IFindPostRequestDTO): Promise<IFindPostResponseDTO> {
    const { token, id } = data
    const tokenData = Authentication.getTokenData(token)

    const postExists = await this.postsRepository.find(id)
    if (!postExists) {
      throw errorAPI.notFound('Post not found')
    }

    const post = new Post(postExists, postExists.id, postExists.created_at)

    return { message: 'Success', post }
  }
}

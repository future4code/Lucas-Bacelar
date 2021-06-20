import { Post } from '../../entities/Post'
import { IPostsRepository } from '../../repositories/IPostsRepository'
import { Authentication } from '../../services/Authentication'
import { ICreatePostRequestDTO, ICreatePostResponseDTO } from './CreatePostDTO'

export class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {}
  async execute(data: ICreatePostRequestDTO): Promise<ICreatePostResponseDTO> {
    const { token, ...postData } = data
    const tokenData = Authentication.getTokenData(token)

    const post = new Post({
      author_id: tokenData.id,
      ...postData,
    })

    await this.postsRepository.save(post)

    return { message: 'Success' }
  }
}

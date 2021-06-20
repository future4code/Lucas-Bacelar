import { Post } from '../../../entities/Post'
import { IPostsRepository } from '../../../repositories/IPostsRepository'
import { Authentication } from '../../../services/Authentication'
import { ICreatePostRequestDTO, ICreatePostResponseDTO } from './CreatePostDTO'
import { CreatePostValidator } from './CreatePostValidator'

export class CreatePostUseCase {
  constructor(
    private postsRepository: IPostsRepository,
    private validator: CreatePostValidator
  ) {}
  async execute(data: ICreatePostRequestDTO): Promise<ICreatePostResponseDTO> {
    const { token, ...postData } = this.validator.validate(data)
    const tokenData = Authentication.getTokenData(token)

    const post = new Post({
      author_id: tokenData.id,
      ...postData,
    })

    await this.postsRepository.save(post)

    return { message: 'Success' }
  }
}

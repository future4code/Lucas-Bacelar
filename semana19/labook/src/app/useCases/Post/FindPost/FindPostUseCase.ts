import { Post } from '../../../entities/Post'
import { IPostsRepository } from '../../../repositories/IPostsRepository'
import { Authentication } from '../../../services/Authentication'
import { errorAPI } from '../../../services/ErrorAPI'
import { IFindPostRequestDTO, IFindPostResponseDTO } from './FindPostDTO'
import { FindPostValidator } from './FindPostValidator'

export class FindPostUseCase {
  constructor(
    private postsRepository: IPostsRepository,
    private validator: FindPostValidator
  ) {}
  async execute(data: IFindPostRequestDTO): Promise<IFindPostResponseDTO> {
    const { token, id } = this.validator.validate(data)
    Authentication.getTokenData(token)

    const postExists = await this.postsRepository.find(id)
    if (!postExists) {
      throw errorAPI.notFound('Post not found')
    }

    const post = new Post(postExists, postExists.id, postExists.created_at)

    return { message: 'Success', post }
  }
}

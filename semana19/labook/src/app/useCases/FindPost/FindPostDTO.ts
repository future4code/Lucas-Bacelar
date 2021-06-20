import { Post } from '../../entities/Post'

export interface IFindPostRequestDTO {
  token: any
  id: any
}

export interface IFindPostResponseDTO {
  post: Post
  message: string
}

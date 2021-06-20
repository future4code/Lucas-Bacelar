import { Post } from '../../../entities/Post';

export interface IFindPostRequestDTO {
  token: any
  id: any
}

export interface IFindPostValidDataDTO {
  token: string
  id: string
}

export interface IFindPostResponseDTO {
  post: Post
  message: string
}

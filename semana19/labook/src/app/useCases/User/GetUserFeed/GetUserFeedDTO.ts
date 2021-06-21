import { Post } from '../../../entities/Post'
import { POST_TYPES } from '../../../types/Post'
export interface IGetUserFeedRequestDTO {
  token: any
  type: any
  page: any
}

export interface IGetUserValidDataDTO {
  token: string
  type: POST_TYPES
  page: number
}

export interface IGetUserFeedResponseDTO {
  posts: Array<Post>
  message: string
}

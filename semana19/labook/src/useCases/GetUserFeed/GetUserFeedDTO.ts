import { Post } from '../../entities/Post'

export interface IGetUserFeedRequestDTO {
  token: any
}

export interface IGetUserFeedResponseDTO {
  posts: Array<Post>
  message: string
}

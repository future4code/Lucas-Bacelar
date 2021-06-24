export interface ICommentPostRequestDTO {
  token: any
  description: any
  post_id: any
}

export interface ICommentPostValidDataDTO {
  token: string
  description: string
  post_id: string
}

export interface ICommentPostResponseDTO {
  message: string
}

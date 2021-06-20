export interface ICreatePostRequestDTO {
  photo: any
  description: any
  type: any
  token: any
}

export interface ICreatePostValidatedDataDTO {
  photo: string
  description: string
  type: POST_TYPES
  token: string
}
export interface ICreatePostResponseDTO {
  message: string
}

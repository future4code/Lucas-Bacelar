export interface IAuthenticateUserRequestDTO {
  email: any
  password: any
}

export interface IAuthenticateUserResponseDTO {
  token: string
  message: string
}

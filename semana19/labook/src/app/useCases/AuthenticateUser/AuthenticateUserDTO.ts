export interface IAuthenticateUserRequestDTO {
  email: any
  password: any
}

export interface IAuthenticateUserValidatedDataDTO {
  email: string
  password: string
}

export interface IAuthenticateUserResponseDTO {
  token: string
  message: string
}

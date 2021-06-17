export interface ICreateUserRequestDTO {
  name: any
  email: any
  password: any
}

export interface ICreateUserResponseDTO {
  token: string
  message: string
}

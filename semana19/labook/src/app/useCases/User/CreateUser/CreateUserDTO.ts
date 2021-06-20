export interface ICreateUserRequestDTO {
  name: any
  email: any
  password: any
}

export interface ICreateUserValidatedDataDTO {
  name: string
  email: string
  password: string
}

export interface ICreateUserResponseDTO {
  token: string
  message: string
}

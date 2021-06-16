export type user = {
  id: string
  name: string
  email: string
  password: string
}

export type signupInputDTO = {
  name: any
  email: any
  password: any
}

export type signupOutputDTO = {
  token: string
  message: string
}

export type authenticationData = {
  id: string
  role: string
}

export type userCredentials = {
  email: string
  password: string
}

export type userPersonalInfo = {
  name: string
  nickname: string
}

export enum userRole {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL',
}

export type userAddress = {
  CEP: string
  Logradouro: string
  Numero: string
  Complemento: string
  Bairro: string
  Cidade: string
  Estado: string
  User_id: string
}

export type user = {
  id: string
  email: string
  password: string
  role: userRole
}

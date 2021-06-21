export enum LOCATION {
  EUA = 'EUA',
  BRAZIL = 'BRAZIL',
}

export enum NATIONALITY {
  BRAZILIAN = 'BRAZILIAN',
  AMERICAN = 'AMERICAN',
}

export interface VerifyAgeUserInputDTO {
  name: string
  age: number
  nationality: NATIONALITY
}

export interface VerifyAgeCasinoInputDTO {
  name: string
  location: LOCATION
}

export interface VerifyAgeResultOutputDTO {
  brazilians: ResultItem
  americans: ResultItem
}

interface ResultItem {
  allowed: string[]
  unallowed: string[]
}

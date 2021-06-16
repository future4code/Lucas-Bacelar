import { UserTable } from '../data/UserTable'
import {
  loginInputDTO,
  loginOutputDTO,
  signupInputDTO,
  signupOutputDTO,
  user,
} from '../model/UserModel'
import { Authentication } from '../services/authentication'
import { errorAPI } from '../services/errorAPI'
import { generateId } from '../services/generateId'
import { HashManager } from '../services/hashManager'

export async function createUser(
  input: signupInputDTO
): Promise<signupOutputDTO> {
  let message = 'Success!'
  const { name, email, password } = input

  if (!name || !email || !password) {
    message = '"name", "email" and "password" must be provided'
    throw errorAPI.wrongParams(message)
  }

  const newUser: user = {
    id: generateId(),
    name,
    email,
    password: await HashManager.hash(password),
  }

  await UserTable.createUser(newUser)

  const token: string = Authentication.generateToken({ id: newUser.id })

  return { token, message }
}

export async function authenticateUser(
  input: loginInputDTO
): Promise<loginOutputDTO> {
  let message = 'Success!'

  const { email, password } = input

  if (!email || !password) {
    message = '"email" and "password" must be provided'
    throw errorAPI.wrongParams(message)
  }

  const queryResult: any = await UserTable.getUserByEmail(email)

  if (!queryResult[0]) {
    message = 'Invalid credentials'
    throw errorAPI.unauthorized(message)
  }

  const user: user = {
    id: queryResult[0].id,
    name: queryResult[0].name,
    email: queryResult[0].email,
    password: queryResult[0].password,
  }

  const passwordIsCorrect: boolean = await HashManager.compare(
    password,
    user.password
  )

  if (!passwordIsCorrect) {
    message = 'Invalid credentials'
    throw errorAPI.unauthorized(message)
  }

  const token: string = Authentication.generateToken({
    id: user.id,
  })

  return { message, token }
}

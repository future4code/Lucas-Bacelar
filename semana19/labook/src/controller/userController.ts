import { UserTable } from '../data/UserTable'
import { signupInputDTO, signupOutputDTO, user } from '../model/UserModel'
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

async function authenticateUser() {}

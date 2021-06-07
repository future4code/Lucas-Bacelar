import { connection } from '../connection'
import { User } from '../types/User'

const userTable = () => connection('User')

export async function createUser({ id, email, password }: User): Promise<void> {
  await userTable().insert({
    id,
    email,
    password,
  })
}

export async function getUserByEmail(email: string): Promise<User> {
  const results = await userTable().where('email', email)
  return results[0]
}

export async function getUserById(id: string): Promise<User> {
  const results = await userTable().where('id', id)
  return results[0]
}

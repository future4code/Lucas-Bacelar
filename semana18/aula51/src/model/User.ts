import { connection } from '../connection'

const userTable = () => connection('User')

export const createUser = async (
  id: string,
  email: string,
  password: string
) => {
  await userTable().insert({
    id,
    email,
    password,
  })
}

import { userOutputDto } from '../../model/user'
import { connection } from '../connection'

export const insertUser = async (user: userOutputDto) => {
  await connection.insert(user).into('to_do_list_users')
}

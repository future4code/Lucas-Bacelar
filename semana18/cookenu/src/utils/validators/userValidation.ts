import connection from '../../connection'
import { generateId } from '../../services/generateId'
import { hash } from '../../services/hashManager'
import { User, USER_ROLES } from '../../types/User'
import { errorAPI } from '../../utils/errorAPI'
import {
  hasAnyEmptyValue,
  isInvalidEmail,
  isInvalidPassword,
} from './validatorHelper'

export async function validateUserSignup({
  name,
  email,
  password,
  role,
}: Omit<User, 'id'>): Promise<User> {
  if (hasAnyEmptyValue([name, email, password, role])) {
    throw errorAPI.wrongParams(
      'Please fill all the fields: name, email, password, role'
    )
  } else if (isInvalidEmail(email)) {
    throw errorAPI.wrongParams('Please put a valid email')
  } else if (isInvalidPassword(password)) {
    throw errorAPI.wrongParams(
      'Please put a password greater than 5 characters'
    )
  }
  if (!(role.toUpperCase() in USER_ROLES)) {
    throw errorAPI.wrongParams('Please put a valid role: ADMIN OR NORMAL')
  }
  return {
    id: generateId(),
    name,
    email,
    password: await hash(password),
    role: role.toUpperCase() as USER_ROLES,
  }
}

export async function validateLoginCredentials({
  email,
  password,
}: Omit<User, 'id' | 'name' | 'role'>): Promise<void> {
  if (hasAnyEmptyValue([email, password])) {
    throw errorAPI.wrongParams('Please fill all the fields: email, password')
  } else if (isInvalidEmail(email)) {
    throw errorAPI.wrongParams('Please put a valid email')
  } else if (isInvalidPassword(password)) {
    throw errorAPI.wrongParams(
      'Please put a password greater than 5 characters'
    )
  }
}

export async function emailExist(email: string): Promise<boolean> {
  const result = await connection('Cookenu_Users').where('email', email)
  return result.length > 0
}

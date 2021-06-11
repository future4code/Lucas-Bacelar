import connection from '../../connection'
import { generateId } from '../../services/generateId'
import { hash } from '../../services/hashManager'
import { User } from '../../types/User'
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
}: Omit<User, 'id'>): Promise<User> {
  if (hasAnyEmptyValue([name, email, password])) {
    throw errorAPI.wrongParams(
      'Please fill all the fields: name, email, password'
    )
  } else if (isInvalidEmail(email)) {
    throw errorAPI.wrongParams('Please put a valid email')
  } else if (isInvalidPassword(password)) {
    throw errorAPI.wrongParams(
      'Please put a password greater than 5 characters'
    )
  }
  return {
    id: generateId(),
    name,
    email,
    password: await hash(password),
  }
}

export async function validateLoginCredentials({
  email,
  password,
}: Omit<User, 'id' | 'name'>): Promise<void> {
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

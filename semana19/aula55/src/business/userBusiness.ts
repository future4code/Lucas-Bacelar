import UserDB from '../data/UserDatabase'
import { User, UserData, UserLogin, USER_ROLES } from '../models/User'
import { generateToken } from '../services/authenticator'
import { compare, hash } from '../services/hashManager'
import { generateId } from '../services/idGenerator'

export async function createUser(user: UserData) {
  try {
    if (!user.name || !user.email || !user.password || !user.role) {
      throw new Error('Please fill all fields: name, email, password and role')
    } else if (!(user.role in USER_ROLES)) {
      throw new Error('Please put a valid user role: ADMIN OR NORMAL')
    } else if (user.email.indexOf('@') === -1) {
      throw new Error('Invalid Email')
    } else if (user.password.length < 6) {
      throw new Error('Password must have at least 6 characters')
    }

    const newUser: User = {
      id: generateId(),
      name: user.name,
      email: user.email,
      password: await hash(user.password),
      role: user.role,
    }

    await UserDB.signup(newUser)

    const token = generateToken({
      id: newUser.id,
      role: user.role,
    })

    return token
  } catch (error) {
    throw new Error(
      error.message ||
        'Error creating user. Please check your system administrator.'
    )
  }
}

export async function loginUser(login: UserLogin) {
  try {
    if (!login.email || !login.password) {
      throw new Error('Please fill all fields: email and password ')
    } else if (login.email.indexOf('@') === -1) {
      throw new Error('Invalid Email')
    } else if (login.password.length < 6) {
      throw new Error('Password must have at least 6 characters')
    }

    const user: User = await UserDB.searchByEmail(login.email)
    if (!(await compare(login.password, user.password))) {
      throw new Error('Incorrect Password')
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
    })

    return token
  } catch (error) {
    throw new Error(
      error.message ||
        'Error creating user. Please check your system administrator.'
    )
  }
}

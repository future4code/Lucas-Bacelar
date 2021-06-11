import { compare } from 'bcryptjs'
import { NextFunction, Request, Response, Router } from 'express'
import { UserTable } from '../model/User'
import { generateToken, getTokenData } from '../services/authentication'
import { generateId } from '../services/generateId'
import { authenticationData } from '../types/Token'
import { User } from '../types/User'
import { errorAPI } from '../utils/errorAPI'
import {
  emailExist,
  validateLoginCredentials,
  validateUserSignup,
} from '../utils/validators/userValidation'
require('express-async-errors')

const route = Router()

route.post('/signup', async (req: Request, res: Response) => {
  const { name, email, password }: Omit<User, 'id'> = req.body
  const validatedUser = await validateUserSignup({ name, email, password })

  if (await emailExist(email)) {
    throw errorAPI.badRequest('Already registered email')
  }

  const newUser = {
    id: generateId(),
    ...validatedUser,
  }

  await UserTable.create(newUser)

  const token: string = generateToken({
    id: newUser.id,
  })

  res.status(201).send({ acess_token: token })
})

route.post(
  '/login',
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password }: Omit<User, 'id' | 'name'> = req.body
    await validateLoginCredentials({
      email,
      password,
    })

    const user: User | null = await UserTable.searchByEmail(email)
    if (!user) {
      throw errorAPI.notFound('User not found')
    } else if (!(await compare(password, user.password))) {
      throw errorAPI.wrongParams('Wrong password')
    }

    const token: string = generateToken({
      id: user.id,
    })

    res.status(200).send({ acess_token: token })
  }
)

route.get('/profile', async (req: Request, res: Response) => {
  const token: string = req.headers.authorization as string

  const tokenData: authenticationData | null = getTokenData(token)

  if (!tokenData) {
    throw errorAPI.unauthorized()
  }

  const user: User | null = await UserTable.searchById(tokenData.id)
  if (!user) {
    throw errorAPI.notFound('User not found')
  }

  const { password, ...your_profile } = user

  res.status(200).send({ your_profile })
})

route.get('/:id', async (req: Request, res: Response) => {
  const token: string = req.headers.authorization as string
  const userId: string = req.params.id as string

  const tokenData: authenticationData | null = getTokenData(token)

  if (!tokenData) {
    throw errorAPI.unauthorized()
  }

  const user: User | null = await UserTable.searchById(userId)
  if (!user) {
    throw errorAPI.notFound('User not found')
  }

  const { password, ...user_profile } = user

  res.status(200).send({ user_profile })
})

export default route

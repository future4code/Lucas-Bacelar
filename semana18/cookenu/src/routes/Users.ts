import { compare } from 'bcryptjs'
import { NextFunction, Request, Response, Router } from 'express'
import { FollowedUsersTable } from '../model/FollowedUsers'
import { RecipeTable } from '../model/Recipe'
import { UserTable } from '../model/User'
import { generateToken, validateToken } from '../services/authentication'
import { Follow, Unfollow } from '../types/FollowUser'
import { Recipe } from '../types/Recipe'
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

  await UserTable.create(validatedUser)

  const token: string = generateToken({
    id: validatedUser.id,
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

route.post('/follow', async (req: Request, res: Response) => {
  const tokenData: authenticationData = validateToken(req.headers.authorization)
  const { userToFollowId }: Follow = req.body

  const followerFollowed: Follow = {
    follower_id: tokenData.id,
    userToFollowId,
  }

  if (await UserTable.userNotExist(tokenData.id)) {
    throw errorAPI.notFound('Your user doesnt exist')
  } else if (await UserTable.userNotExist(userToFollowId)) {
    throw errorAPI.notFound('The user to be followed not exist')
  } else if (await FollowedUsersTable.isFollowed(followerFollowed)) {
    throw errorAPI.badRequest('User already followed')
  }

  await FollowedUsersTable.follow(followerFollowed)

  res.status(200).send({ message: 'Followed successfully' })
})

route.post('/unfollow', async (req: Request, res: Response) => {
  const tokenData: authenticationData = validateToken(req.headers.authorization)
  const { userToUnfollowId }: Unfollow = req.body

  const followerUnfollowed: Unfollow = {
    follower_id: tokenData.id,
    userToUnfollowId,
  }

  if (await UserTable.userNotExist(tokenData.id)) {
    throw errorAPI.notFound('Your user doesnt exist')
  } else if (await UserTable.userNotExist(userToUnfollowId)) {
    throw errorAPI.notFound('The user to be followed not exist')
  } else if (await FollowedUsersTable.isNotFollowed(followerUnfollowed)) {
    throw errorAPI.badRequest('User is already unfollowed')
  }

  await FollowedUsersTable.unfollow(followerUnfollowed)

  res.status(200).send({ message: 'Unfollowed successfully' })
})

route.get('/profile', async (req: Request, res: Response) => {
  const tokenData: authenticationData = validateToken(req.headers.authorization)

  const user: User | null = await UserTable.searchById(tokenData.id)

  if (!user) {
    throw errorAPI.notFound('User not found')
  }

  const { password, ...your_profile } = user

  res.status(200).send({ your_profile })
})

route.get('/feed', async (req: Request, res: Response) => {
  validateToken(req.headers.authorization)
  const recipes: Array<Recipe> = await RecipeTable.getRecipesFeed()
  console.log(recipes)

  res.status(200).send({ recipes })
})

route.get('/:id', async (req: Request, res: Response) => {
  const userId: string = req.params.id as string

  validateToken(req.headers.authorization)

  const user: User | null = await UserTable.searchById(userId)
  if (!user) {
    throw errorAPI.notFound('User not found')
  }

  const { password, ...user_profile } = user

  res.status(200).send({ user_profile })
})

export default route

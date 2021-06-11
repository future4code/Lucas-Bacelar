import dotenv from 'dotenv'
import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types/Token'

dotenv.config()

export const generateToken = (payload: authenticationData): string => {
  return jwt.sign(payload, process.env.JWT_KEY!, { expiresIn: '24d' })
}

export const getTokenData = (token: string): authenticationData | null => {
  try {
    const { id } = jwt.verify(token, process.env.JWT_KEY!) as authenticationData

    return { id }
  } catch (error) {
    console.log(error.message)
    return null
  }
}

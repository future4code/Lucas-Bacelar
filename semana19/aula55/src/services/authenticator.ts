import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../models/User'

export type AuthenticationData = {
  id: string
  role: USER_ROLES
}

export function generateToken(payload: AuthenticationData): string {
  return jwt.sign(payload, process.env.JWT_KEY as string, {
    expiresIn: '24min',
  })
}

export function getTokenData(token: string): AuthenticationData {
  return jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
}

export function validateToken(token: string): AuthenticationData {
  const tokenData: AuthenticationData = getTokenData(token)
  if (!tokenData) {
    throw new Error('Invalid token')
  }

  return tokenData
}

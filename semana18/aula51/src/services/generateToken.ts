import dotenv from 'dotenv'
import * as jwt from 'jsonwebtoken'
import { payload } from '../types/Token'

dotenv.config()

const expiresIn = '1min'

export const generateToken = (payload: payload): string => {
  const token = jwt.sign(payload, process.env.JWT_KEY as string, {
    expiresIn,
  })
  return token
}

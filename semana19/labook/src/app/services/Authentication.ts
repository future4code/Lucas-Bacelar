import dotenv from 'dotenv'
import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types/authenticationData'
import { errorAPI } from './ErrorAPI'

dotenv.config()

export class Authentication {
  private static EXPIRES_IN: string = String(process.env.JWT_EXPIRES_IN)
  private static JWT_KEY: string = String(process.env.JWT_KEY)

  static generateToken(payload: authenticationData): string {
    return jwt.sign(payload, this.JWT_KEY, {
      expiresIn: this.EXPIRES_IN || '1h',
    })
  }

  static getTokenData(token: string): authenticationData {
    try {
      const result: any = jwt.verify(token, this.JWT_KEY)
      return { id: result.id }
    } catch (error) {
      throw errorAPI.unauthorized(error.message)
    }
  }
}

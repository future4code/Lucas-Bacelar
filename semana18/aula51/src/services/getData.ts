import * as jwt from 'jsonwebtoken'
import { payload } from '../types/Token'

export const getData = (token: string): payload => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
  const result = {
    id: payload.id,
  }
  return result
}

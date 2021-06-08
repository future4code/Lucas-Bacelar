import { compareSync, genSaltSync, hashSync } from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export function generateHash(plainText: string): string {
  const rounds: number = Number(process.env.BCRYPT_COST)
  const salt: string = genSaltSync(rounds)
  const hash: string = hashSync(plainText, salt)
  return hash
}

export function compareHash(plainText: string, cypherText: string): boolean {
  return compareSync(plainText, cypherText)
}

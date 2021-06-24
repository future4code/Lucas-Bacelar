import * as bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export class HashManager {
  private static cost: number = Number(process.env.BCRYPT_COST)

  static async hash(plainText: string): Promise<string> {
    const rounds = this.cost
    const salt = await bcrypt.genSalt(rounds)
    return bcrypt.hash(plainText, salt)
  }

  static async compare(
    plainText: string,
    cypherText: string
  ): Promise<boolean> {
    return bcrypt.compare(plainText, cypherText)
  }
}

import * as bcrypt from 'bcryptjs'

export const hash = async (s: string): Promise<string> => {
  const rounds: number = Number(process.env.BCRYPT_COST)

  if (isNaN(Number(process.env.BCRYPT_COST))) {
    throw new Error('O cost precisa ser um número')
  }

  const salt = await bcrypt.genSalt(rounds)

  const result = await bcrypt.hash(s, salt)

  return result
}

export const compare = async (s: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(s, hash)
}

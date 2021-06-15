import { selectUserByEmail } from '../../data/user/selectUserByEmail'
import { loginInputDto, userOutputDto } from '../../model/user'
import { generateToken } from '../../services/authenticator'
import { compare } from '../../services/hashManager'

export const loginBusiness = async ({ email, password }: loginInputDto) => {
  if (!email || !password) {
    throw new Error("'email' e 'senha' são obrigatórios")
  }

  const user: userOutputDto = await selectUserByEmail(email)

  if (!user) {
    throw new Error('Usuário não encontrado ou senha incorreta')
  }

  const passwordIsCorrect: boolean = await compare(password, user.password)

  if (!passwordIsCorrect) {
    throw new Error('Usuário não encontrado ou senha incorreta')
  }

  const token: string = generateToken({
    id: user.id,
    role: user.role,
  })

  return token
}

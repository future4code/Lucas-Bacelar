import { insertUser } from '../../data/user/insertUser'
import { insertUserDto, signupInputDto } from '../../model/user'
import { generateToken } from '../../services/authenticator'
import { hash } from '../../services/hashManager'
import { generateId } from '../../services/idGenerator'

export const signupBusiness = async (
  userData: signupInputDto
): Promise<string> => {
  if (
    !userData.name ||
    !userData.nickname ||
    !userData.email ||
    !userData.password ||
    !userData.role
  ) {
    throw new Error(
      'Preencha os campos "name","nickname", "email" e "password"'
    )
  }

  const cypherPassword = await hash(userData.password)

  const newUser: insertUserDto = {
    ...userData,
    password: cypherPassword,
    id: generateId(),
  }

  await insertUser(newUser)

  const token: string = generateToken({
    id: newUser.id,
    role: userData.role,
  })

  return token
}

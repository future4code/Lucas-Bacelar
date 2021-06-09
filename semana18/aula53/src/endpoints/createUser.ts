import { Request, Response } from 'express'
import connection from '../connection'
import { generateToken } from '../services/authenticator'
import { cepInfo, userAddress } from '../services/cepManager'
import { hash } from '../services/hashManager'
import generateId from '../services/idGenerator'
import { user, userRole } from '../types'

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, password, role, CEP, numero, complemento } =
      req.body

    if (
      !name ||
      !nickname ||
      !email ||
      !password ||
      !role ||
      !CEP ||
      !numero ||
      !complemento
    ) {
      res.statusCode = 422
      throw new Error(
        "Preencha os campos 'name','nickname', 'password', 'email' e 'role'"
      )
    }

    if (
      role.toUpperCase() !== userRole.ADMIN &&
      role.toUpperCase() !== userRole.NORMAL
    ) {
      res.statusCode = 422
      throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN")
    }

    const [user] = await connection('to_do_list_users').where({ email })

    if (user) {
      res.statusCode = 409
      throw new Error('Email já cadastrado')
    }

    const endereco: userAddress | null = await cepInfo(CEP)
    if (!endereco) {
      res.statusCode = 404
      throw new Error('Digite um CEP válido')
    }

    const id: string = generateId()

    const cypherText = await hash(password)

    const newUser: user = {
      id,
      name,
      nickname,
      email,
      password: cypherText,
      role,
    }

    await connection('to_do_list_users').insert(newUser)

    const token: string = generateToken({ id, role })

    res.status(201).send({ token })
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: 'Internal server error' })
    } else {
      res.send({ message: error.message })
    }
  }
}

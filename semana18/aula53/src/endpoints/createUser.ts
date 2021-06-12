import { Request, Response } from 'express'
import connection from '../connection'
import { generateToken } from '../services/authenticator'
import { cepInfo } from '../services/cepManager'
import { hash } from '../services/hashManager'
import generateId from '../services/idGenerator'
import { user, userAddress, userRole } from '../types'

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password, role, CEP, numero, complemento } = req.body

    if (!email || !password || !role || !CEP || !numero || !complemento) {
      res.statusCode = 422
      throw new Error("Preencha os campos 'password', 'email' e 'role'")
    }

    if (
      role.toUpperCase() !== userRole.ADMIN &&
      role.toUpperCase() !== userRole.NORMAL
    ) {
      res.statusCode = 422
      throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN")
    }

    const user = await connection('User').where({ email })

    if (!user) {
      res.statusCode = 409
      throw new Error('Email já cadastrado')
    }

    const endereco: cepInfo | null = await cepInfo(CEP)
    if (!endereco) {
      res.statusCode = 404
      throw new Error('Digite um CEP válido')
    }

    const id: string = generateId()

    const cypherText = await hash(password)

    const newUser: user = {
      id,
      email,
      password: cypherText,
      role: role.toUpperCase(),
    }

    const newAddress: userAddress = {
      ...endereco,
      Numero: numero,
      Complemento: complemento,
      User_id: id,
    }

    await connection('User')
      .insert(newUser)
      .then(async () => {
        console.log('oi')
        await connection('UserAddress').insert(newAddress)
      })

    const token: string = generateToken({ id, role })

    res.status(201).send({ token })
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.SQLmessage || error.message })
    } else {
      res.send({ message: error.message })
    }
  }
}

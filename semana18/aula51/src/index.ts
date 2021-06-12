import express, { Request, Response } from 'express'
import { AddressInfo } from 'net'
import { createUser, getUserByEmail, getUserById } from './model/User'
import { generateId } from './services/generateId'
import { generateToken } from './services/generateToken'
import { getData } from './services/getData'
import { payload } from './types/Token'
import { User } from './types/User'

const app = express()

app.use(express.json())

app.post('/user/signup', async (req: Request, res: Response) => {
  try {
    const { email, password }: Omit<User, 'id'> = req.body
    if (!email || !email.includes('@')) {
      throw new Error('Por favor coloque um email válido')
    } else if (!password || password.length < 6) {
      throw new Error('Por favor coloque uma senha com 6 ou mais caracteres')
    }

    const newUser: User = {
      id: generateId(),
      email,
      password,
    }

    createUser(newUser)
    res.status(200).send({ token: generateToken({ id: newUser.id }) })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

app.post('/user/login', async (req: Request, res: Response) => {
  try {
    const { email, password }: Omit<User, 'id'> = req.body
    if (!email || !email.includes('@')) {
      throw new Error('Por favor coloque um email válido')
    }

    const user: User = await getUserByEmail(email)

    if (!user) {
      throw new Error('Email não encontrado')
    } else if (user.password !== password) {
      throw new Error('Senha inválida')
    }

    const token = generateToken({
      id: user.id,
    })
    res.status(200).send({ token })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

app.get('/user/profile', async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string

    const authenticationData: payload = getData(token)

    const user: User = await getUserById(authenticationData.id)
    res.status(200).send({
      id: user.id,
      password: user.password,
    })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

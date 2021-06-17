import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { deleteUser } from './controller/deleteUser'
import { getUsers } from './controller/getUsers'
import { Login } from './controller/login'
import { Signup } from './controller/signup'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.post('/signup', Signup)
app.post('/login', Login)
app.get('/', getUsers)
app.delete('/:id', deleteUser)

app.listen(3003, () => {
  console.log('Servidor rodando na porta 3003')
})

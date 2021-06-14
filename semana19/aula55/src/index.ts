import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { Login } from './controller/Login'
import { Signup } from './controller/Signup'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', async function (req, res) {
  res.send({ message: 'ok' })
})

app.post('/signup', Signup)
app.post('/login', Login)

app.listen(3003, () => {
  console.log('Servidor rodando na porta 3003')
})

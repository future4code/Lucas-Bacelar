import cors from 'cors'
import express, { Express } from 'express'
import { AddressInfo } from 'net'
import { userController } from './controller/user'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get('/users/all', userController.getAllUsers)
app.get('/users/name', userController.filterByName)
app.get('/users/type', userController.filterByType)
app.get('/users/order', userController.orderUsers)
app.get('/users/page', userController.paginateUsers)

app.get('/users/search', userController.searchUsers)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

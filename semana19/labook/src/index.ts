/**************************** IMPORTS ******************************/

import cors from 'cors'
import express, { Express } from 'express'
import { postRoute, userRoute } from './routes'
import { errorHandler } from './services/middleware'

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** ENDPOINTS ******************************/
app.use('/users', userRoute)
app.use('/posts', postRoute)
app.use(errorHandler)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
  console.log('Server running on port 3003')
})

/**************************** IMPORTS ******************************/

import cors from 'cors'
import express, { Express } from 'express'
import { feedRoute, friendshipRoute, postRoute, userRoute } from './routes'
import { errorHandler } from './services/errorHandler'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.use('/users', userRoute)
app.use('/posts', postRoute)
app.use('/feed', feedRoute)
app.use('/friendships', friendshipRoute)
app.use(errorHandler)

app.listen(3003, () => {
  console.log('Server running on port 3003')
})

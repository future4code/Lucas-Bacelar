import { Request, Response } from 'express'
import app from './app'
import task from './routes/task'
import user from './routes/user'

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!')
})

app.use('/user', user)
app.use('/task', task)

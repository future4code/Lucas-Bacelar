import { Router } from 'express'
import { userRouter } from './UserRoute'

const router = Router()

router.use('/users', userRouter)

export { router }

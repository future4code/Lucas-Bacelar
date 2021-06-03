import express from 'express'
import User from '../controllers/user'

const userRouter = express.Router()

userRouter.get('/all', User.getAllUsers)
userRouter.get('/', User.searchUser)
userRouter.get('/:id', User.searchUserById)

userRouter.put('/', User.createUser)

userRouter.post('/edit/:id', User.editUser)

export default userRouter

import express from 'express'
import Task from '../controllers/task'
const taskRouter = express.Router()

taskRouter.get('/', Task.getTaskByCreatorId)

taskRouter.get('/:id', Task.getTaskById)
taskRouter.get('/:id/responsible', Task.taskResponsibles)

taskRouter.put('/', Task.createTask)

taskRouter.post('/responsible', Task.assignTask)
export default taskRouter

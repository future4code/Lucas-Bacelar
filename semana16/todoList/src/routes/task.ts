import express, { Request, Response } from 'express'
import Task from '../controllers/task'
const taskRouter = express.Router()

taskRouter.get('/', (req: Request, res: Response) => {
  if (req.query.creatorUserId) {
    Task.getTaskByCreatorId(req, res)
  } else if (req.query.status) {
    Task.getTaskByStatus(req, res)
  } else {
    res.status(404).send('Page not found')
  }
})

taskRouter.get('/:id', Task.getTaskById)
taskRouter.get('/:id/responsible', Task.taskResponsibleUsers)

taskRouter.put('/', Task.createTask)
taskRouter.post('/status/edit', Task.updateTask)

taskRouter.post('/responsible', Task.assignTask)
export default taskRouter

import { Request, Response } from 'express'
import { createTaskBusiness } from '../../business/task/createTaskBusiness'
import { createTaskInputDTO } from '../../model/task'

export const createTask = async (req: Request, res: Response) => {
  try {
    const createTaskInput: createTaskInputDTO = {
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      authorId: req.body.authorId,
    }

    await createTaskBusiness(createTaskInput)

    res.status(201).end()
  } catch (error) {
    res.statusMessage = error.message
    res.status(500).end()
  }
}

import { Request, Response } from 'express'
import { getTaskByIdBusiness } from '../../business/task/getTaskByIdBusiness'
import { getTaskInputDTO, getTaskOutputDTO } from '../../model/task'

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const getTaskInput: getTaskInputDTO = {
      id: req.body.id,
    }

    const task: getTaskOutputDTO = await getTaskByIdBusiness(getTaskInput)

    res.status(200).send(task)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

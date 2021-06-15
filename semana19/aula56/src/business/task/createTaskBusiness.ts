import { insertTask } from '../../data/task/insertTask'
import { createTaskInputDTO, task } from '../../model/task'
import { generateId } from '../../services/idGenerator'

export const createTaskBusiness = async (taskData: createTaskInputDTO) => {
  if (
    !taskData.title ||
    !taskData.description ||
    !taskData.deadline ||
    !taskData.authorId
  ) {
    throw new Error(
      '"title", "description", "deadline" e "authorId" são obrigatórios'
    )
  }

  const newTask: task = {
    id: generateId(),
    ...taskData,
  }

  await insertTask(newTask)
}

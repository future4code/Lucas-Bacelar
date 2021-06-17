import { selectTaskById } from '../../data/task/selectTaskById'
import { getTaskInputDTO, getTaskOutputDTO } from '../../model/task'

export const getTaskByIdBusiness = async ({ id }: getTaskInputDTO) => {
  const result = await selectTaskById(id)

  if (!result) {
    throw new Error('Tarefa não encontrada')
  }

  const taskWithUserInfo: getTaskOutputDTO = {
    id: result.id,
    title: result.title,
    description: result.description,
    deadline: result.deadline,
    status: result.status,
    authorId: result.author_id,
    authorNickname: result.nickname,
  }

  return taskWithUserInfo
}

export type taskData = {
  title: string
  description: string
  deadline: string
  authorId: string
}

export type createTaskInputDTO = {
  title: any
  description: any
  deadline: any
  authorId: any
}

export type getTaskInputDTO = {
  id: string
}

export type getTaskOutputDTO = {
  id: string
  title: string
  description: string
  deadline: string
  status: string
  authorId: string
  authorNickname: string
}

export type task = taskData & { id: string }

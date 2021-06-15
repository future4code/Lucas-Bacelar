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

export type task = taskData & { id: string }

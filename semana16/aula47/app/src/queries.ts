import { connection } from './connection'

const ActorTable = connection('Actor')

const searchByName = async (name: string): Promise<any> => {
  const result = await ActorTable.where('name', name)
  return result
}

const countActors = async (gender: string): Promise<any> => {
  const result = await ActorTable.count('gender', { as: 'contagem' }).where(
    'gender',
    gender
  )

  return result
}

const updateSalary = async (id: string, salary: number): Promise<void> => {
  await ActorTable.where('id', id).update('salary', salary)
}

const deleteActor = async (id: string): Promise<void> => {
  await ActorTable.where('id', id).delete()
}

const genderSalaryAverage = async (gender: string): Promise<any> => {
  const result = await ActorTable.avg('salary as salary_avg').where(
    'gender',
    gender
  )
  return result
}

export {
  searchByName,
  countActors,
  updateSalary,
  deleteActor,
  genderSalaryAverage,
}

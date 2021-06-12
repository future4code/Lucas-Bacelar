import { connection } from '../connection'

async function selectAllUsers(): Promise<any> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio;
  `)

  return result[0]
}

async function filterByName(name: string): Promise<any> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio
     WHERE name like '%${name}%';
  `)

  return result[0]
}

async function filterByType(type: string): Promise<any> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio
     WHERE type='${type}';
  `)

  return result[0]
}

async function orderUsers(orderType: string, direction: string): Promise<any> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio
     ORDER BY ${orderType} ${direction};
  `)

  return result[0]
}

async function paginateUsers(page: number): Promise<any> {
  const offset = page * 5 - 5
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio
     ORDER BY id
     LIMIT ${offset}, 5;
  `)

  return result[0]
}

async function searchUsers(
  name: string,
  type: string,
  orderType: string,
  direction: string,
  page: number
): Promise<any> {
  const offset = page * 5 - 5
  const typeParam = type ? `'${type}'` : 'type'
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio
     WHERE name like '%${name}%'
     AND type=${typeParam}
     ORDER BY ${orderType} ${direction}
     LIMIT ${offset}, 5;
  `)

  return result[0]
}

export default {
  selectAllUsers,
  filterByName,
  filterByType,
  orderUsers,
  paginateUsers,
  searchUsers,
}

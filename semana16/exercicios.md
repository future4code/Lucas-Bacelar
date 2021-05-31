
# Exercicios | Aula 47 - Knex.js

## Exercicio 1

#### a)
Quando usamos o metodo raw no knex.js além de recerbemos a respota da query, recebemos os metadados da tabela como por exemplo informações das colunas.

#### b)
~~~~js
const searchByName = async (name: string): Promise<any> => {
  const result = await connection('Actor').where('name', name)
  return result
}
~~~~

#### c)
~~~~js
const countActors = async (gender: string): Promise<any> => {
  const result = await connection('Actor')
    .count('gender', { as: 'contagem' })
    .where('gender', gender)

  return result
}
~~~~

## Exercicio 2

#### a)
~~~~js
const updateSalary = async (id: string, salary: number): Promise<void> => {
  await connection('Actor').where('id', id).update('salary', salary)
}
~~~~

#### b)
~~~~js
const deleteActor = async (id: string): Promise<void> => {
  await connection('Actor').where('id', id).delete()
}
~~~~

#### c)
~~~~js
const genderSalaryAverage = async (gender: string): Promise<any> => {
  const result = await connection('Actor').avg('salary as salary_avg').where(
    'gender',
    gender
  )
  return result
}
~~~~

## Exercicio 3

#### a)
~~~~js
app.get('/actor/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const actor = await getActorById(id)

    res.status(200).send(actor)
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    })
  }
})
~~~~

#### b)
~~~~js
app.get('/actor', async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string)
    res.status(200).send({
      quantidade: count,
    })
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    })
  }
})
~~~~

## Exercicio 4

#### a)
~~~~js
app.post('/actor', async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary)

    res.status(200).send({ message: 'Updated!' })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})

~~~~

#### b)
~~~~js
app.delete('/actor/:id', async (req: Request, res: Response) => {
  try {
    await deleteActor(req.body.id)

    res.status(204).send({ message: 'Deleted!' })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})
~~~~
import { Request, Response } from 'express'
import app from './app'
import { connection } from './connection'
import { countActors, searchByName } from './queries'

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!')
})

app.get('/actors', async (req: Request, res: Response) => {
  try {
    const result = await connection('Actor')

    res.send(result)
  } catch (error) {
    console.log(error.sqlMessage || error.message)

    res.status(500).send('An unexpected error occurred')
  }
})

app.get('/actors/:nome', async (req: Request, res: Response) => {
  try {
    const nome = req.params.nome
    const result = await searchByName(nome)

    res.send(result)
  } catch (error) {
    console.log(error.sqlMessage || error.message)

    res.status(500).send('An unexpected error occurred')
  }
})

app.get('/actors/count/:gender', async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender
    const result = await countActors(gender)

    res.send(result[0])
  } catch (error) {
    console.log(error.sqlMessage || error.message)

    res.status(500).send('An unexpected error occurred')
  }
})

// app.put('/actors/salary/:id', async (req: Request, res: Response) => {
//   try {
//     const gender = req.params.gender
//     const result = await countActors(gender)

//     res.send(result[0])
//   } catch (error) {
//     console.log(error.sqlMessage || error.message)

//     res.status(500).send('An unexpected error occurred')
//   }
// })

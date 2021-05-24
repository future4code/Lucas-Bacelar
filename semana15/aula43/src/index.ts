import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

let countryList: Array<country> = countries
const app = express()

app.use(express.json())
app.use(cors())

app.get('/countries/all', (req: Request, res: Response) => {
  const result = countries.map((country) => {
    return {
      id: country.id,
      name: country.name,
    }
  })

  res.status(200).send(result)
})

app.get('/countries/search', (req: Request, res: Response) => {
  let result: Array<country> = countryList
  let errorCode: number = 404

  const name: string | undefined = req.query?.name
    ? String(req.query.name)
    : undefined
  const capital: string | undefined = req.query?.capital
    ? String(req.query.capital)
    : undefined
  const continent: string | undefined = req.query?.continent
    ? String(req.query.continent)
    : undefined

  try {
    if (!name && !capital && !continent) {
      errorCode = 422
      throw new Error(
        'Por favor coloque pelo menos um parametro ao fazer a busca'
      )
    }

    if (name) {
      result = result.filter((country) => {
        return country.name.toLowerCase().includes(name.toLowerCase())
      })
    }
    if (capital) {
      result = result.filter((country) => {
        return country.capital.toLowerCase().includes(capital.toLowerCase())
      })
    }
    if (continent) {
      result = result.filter((country) => {
        return country.continent.toLowerCase().includes(continent.toLowerCase())
      })
    }

    if (result.length === 0) {
      throw new Error('Não foram achados paises com essas caracteristicas')
    }

    res.status(200).send(result)
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
})

app.get('/countries/:id', (req: Request, res: Response) => {
  const id: number = Number(req.params.id)
  let errorCode: number = 400

  try {
    if (isNaN(id)) {
      throw new Error('O id fornecido é inválido')
    }

    const result: country | undefined = countryList.find(
      (country) => country.id === id
    )

    if (!result) {
      errorCode = 404
      throw new Error('O pais com o id enviado não foi encontrado')
    } else {
      res.status(200).send(result)
    }
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
})

app.put('/countries/edit/:id', (req: Request, res: Response) => {
  const id: number = Number(req.params.id)
  let errorCode: number = 404
  try {
    if (isNaN(id)) {
      errorCode = 422
      throw new Error('O id passado não é valido')
    }

    const countryExist = countryList.some((country) => {
      return country.id === id
    })

    if (!countryExist) {
      throw new Error('O pais passado não existe na lista')
    }

    const { name, capital } = req.body
    if (!name || !capital) {
      errorCode = 400
      throw new Error('Coloque um nome ou capital válido')
    }
    countryList = countryList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: name,
          capital: capital,
        }
      }
      return item
    })
    res.status(200).send(
      countryList.find((country) => {
        return country.id === id
      })
    )
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.listen(3001, () => {
  console.log('Server is running in http://localhost:3001')
})

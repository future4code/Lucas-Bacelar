import { Request, Response, Router } from 'express'
require('express-async-errors')

const route = Router()

route.post('/', async (req: Request, res: Response) => {
  try {
    res.statusCode = 400
  } catch (error) {
    res.send({ message: error.sqlMessage || error.message })
  }
})

export default route

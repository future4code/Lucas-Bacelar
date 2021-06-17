import { NextFunction, Request, Response } from 'express'
import { errorAPI } from './ErrorAPI'

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof errorAPI) {
    response.status(error.code).send({ error: error.message })
    return
  }
  response.status(500).send({ message: 'something went bad' })
}

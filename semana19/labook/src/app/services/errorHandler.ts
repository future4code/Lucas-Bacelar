import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import { errorAPI } from './APIError'

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof errorAPI) {
    response.status(error.code).send({ error: error.message })
    return
  } else if (error instanceof ZodError) {
    const message = error.issues[0].message
    const path = error.issues[0].path[0]
    response.status(406).send({ error: `${path}: ${message}` })
    return
  }
  response.status(500).send({ message: 'something went bad' })
}

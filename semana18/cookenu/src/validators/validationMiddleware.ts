import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { errorAPI } from '../utils/errorAPI'

export function validateRequestSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const firstError: string = errors.array()[0].msg
    throw errorAPI.wrongParams(firstError)
  }

  next()
}

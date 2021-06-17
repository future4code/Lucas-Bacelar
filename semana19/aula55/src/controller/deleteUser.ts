import { Request, Response } from 'express'
import * as userBusiness from '../business/userBusiness'
export async function deleteUser(req: Request, res: Response) {
  try {
    const input = {
      id: req.params.id,
      token: req.headers.authorization!,
    }
    await userBusiness.deleteUser(input)

    res.status(204).send()
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

import { Request, Response } from 'express'
import userBusiness from '../business/UserBusiness'

export class UserController {
  public async signup(req: Request, res: Response) {
    try {
      const { name, role, email, password } = req.body
      const result = await userBusiness.signup(name, email, password, role)
      res.status(200).send(result)
    } catch (error) {
      const { statusCode, message } = error
      res.status(statusCode || 400).send({ message })
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const result = await userBusiness.login(email, password)
      res.status(200).send(result)
    } catch (error) {
      const { statusCode, message } = error
      res.status(statusCode || 400).send({ message })
    }
  }

  public async searchProfile(req: Request, res: Response) {
    try {
      const { id } = req.params
      const result = await userBusiness.getUserById(id)
      res.status(200).send(result)
    } catch (error) {
      const { statusCode, message } = error
      res.status(statusCode || 400).send({ message })
    }
  }

  public async getAllUsers(req: Request, res: Response) {
    try {
      const role = req.params.role
      const result = await userBusiness.getAllUsers(role)
      res.status(200).send(result)
    } catch (error) {
      const { statusCode, message } = error
      res.status(statusCode || 400).send({ message })
    }
  }

  public async userProfile(req: Request, res: Response) {
    try {
      const { id } = req.params
      const result = await userBusiness.getProfile(id)
      res.status(200).send(result)
    } catch (error) {
      const { statusCode, message } = error
      res.status(statusCode || 400).send({ message })
    }
  }
}

export default new UserController()

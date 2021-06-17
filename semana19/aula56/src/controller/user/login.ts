import { Request, Response } from 'express'
import { loginBusiness } from '../../business/user/loginBusiness'
import { loginInputDto } from '../../model/user'

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const loginInput: loginInputDto = {
      email: req.body.email,
      password: req.body.password,
    }

    const token: string = await loginBusiness(loginInput)

    res.send({
      message: 'Usuário logado!',
      token,
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

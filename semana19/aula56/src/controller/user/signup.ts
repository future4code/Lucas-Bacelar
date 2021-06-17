import { Request, Response } from 'express'
import { signupBusiness } from '../../business/user/signupBusiness'
import { signupInputDto } from '../../model/user'

export const signup = async (req: Request, res: Response) => {
  try {
    const signupInput: signupInputDto = {
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    }

    const token: string = await signupBusiness(signupInput)

    res.status(201).send({
      message: 'Usuário criado!',
      token,
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

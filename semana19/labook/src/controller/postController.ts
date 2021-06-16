import { NextFunction, Request, Response } from 'express'
import * as postBusiness from '../business/postBusiness'
import {
  createPostInputDTO,
  createPostOutputDTO,
  searchPostInputDTO,
  searchPostOutputDTO,
} from '../model/PostModel'

export async function createPost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const createPostInput: createPostInputDTO = {
      photo: req.body.photo,
      description: req.body.description,
      type: req.body.type,
      token: req.headers.authorization,
    }

    const { message }: createPostOutputDTO = await postBusiness.createPost(
      createPostInput
    )

    res.status(201).send({ message })
  } catch (error) {
    next(error)
  }
}

export async function searchPost(req: Request, res: Response) {
  try {
    const searchPostInput: searchPostInputDTO = {
      id: req.params.id,
    }

    const { message, post }: searchPostOutputDTO =
      await postBusiness.searchPost(searchPostInput)

    res.status(200).send({ message, post })
  } catch (error) {
    let message = error.sqlMessage || error.message
    res.statusCode = 400

    res.send({ message })
  }
}

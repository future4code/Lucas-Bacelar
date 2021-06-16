import { Request, Response, Router } from 'express'
import { connection } from '../data/connection'
import { post } from '../model/PostModel'
import { authenticationData } from '../model/TokenModel'
import { Authentication } from '../services/authentication'
import { generateId } from '../services/generateId'

const postRouter = Router()

postRouter.post('/create', async (req: Request, res: Response) => {
  try {
    let message = 'Success!'

    const { photo, description, type } = req.body

    const token: string = req.headers.authorization as string

    const tokenData: authenticationData = Authentication.getTokenData(token)

    const id: string = generateId()

    await connection('labook_posts').insert({
      id,
      photo,
      description,
      type,
      author_id: tokenData.id,
    })

    res.status(201).send({ message })
  } catch (error) {
    let message = error.sqlMessage || error.message
    res.statusCode = 400

    res.send({ message })
  }
})

postRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    let message = 'Success!'

    const { id } = req.params

    const queryResult: any = await connection('labook_posts')
      .select('*')
      .where({ id })

    if (!queryResult[0]) {
      res.statusCode = 404
      message = 'Post not found'
      throw new Error(message)
    }

    const post: post = {
      id: queryResult[0].id,
      photo: queryResult[0].photo,
      description: queryResult[0].description,
      type: queryResult[0].type,
      createdAt: queryResult[0].created_at,
      authorId: queryResult[0].author_id,
    }

    res.status(200).send({ message, post })
  } catch (error) {
    let message = error.sqlMessage || error.message
    res.statusCode = 400

    res.send({ message })
  }
})

export default postRouter

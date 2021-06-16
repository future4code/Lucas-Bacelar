import { PostTable } from '../data/PostTable'
import {
  createPostDbInsertDTO,
  createPostInputDTO,
  createPostOutputDTO,
  post,
  searchPostInputDTO,
  searchPostOutputDTO,
} from '../model/PostModel'
import { authenticationData } from '../model/TokenModel'
import { Authentication } from '../services/authentication'
import { errorAPI } from '../services/errorAPI'
import { generateId } from '../services/generateId'

export async function createPost(
  input: createPostInputDTO
): Promise<createPostOutputDTO> {
  let message = 'Success!'

  const { photo, description, type, token } = input

  const tokenData: authenticationData = Authentication.getTokenData(token)

  const newPost: createPostDbInsertDTO = {
    id: generateId(),
    photo,
    description,
    type,
    author_id: tokenData.id,
  }

  await PostTable.createPost(newPost)

  return { message }
}

export async function searchPost(
  input: searchPostInputDTO
): Promise<searchPostOutputDTO> {
  let message = 'Success!'

  const { id } = input

  const queryResult: any = await PostTable.getPost(id)

  if (!queryResult[0]) {
    message = 'Post not found'
    throw errorAPI.notFound(message)
  }

  const post: post = {
    id: queryResult[0].id,
    photo: queryResult[0].photo,
    description: queryResult[0].description,
    type: queryResult[0].type,
    createdAt: queryResult[0].created_at,
    authorId: queryResult[0].author_id,
  }

  return { message, post }
}

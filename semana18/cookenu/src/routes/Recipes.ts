import { Request, Response, Router } from 'express'
import { RecipeTable } from '../model/Recipe'
import { getTokenData } from '../services/authentication'
import { Recipe } from '../types/Recipe'
import { authenticationData } from '../types/Token'
import { errorAPI } from '../utils/errorAPI'
import { recipeBodyValidation } from '../utils/validators/recipeValidation'
require('express-async-errors')

const route = Router()

route.post('/', async (req: Request, res: Response) => {
  const token: string = req.headers.authorization as string

  const tokenData: authenticationData | null = getTokenData(token)

  if (!tokenData) {
    throw errorAPI.unauthorized()
  }

  const validatedRecipe = recipeBodyValidation(req.body)

  const recipe: Recipe = {
    ...validatedRecipe,
    creator_id: tokenData.id,
  }

  await RecipeTable.create(recipe)

  res.status(201).send(recipe)
})

route.get('/:id', async (req: Request, res: Response) => {
  const token: string = req.headers.authorization as string
  const recipeId: string = req.params.id as string

  const tokenData: authenticationData | null = getTokenData(token)

  if (!tokenData) {
    throw errorAPI.unauthorized()
  }

  const recipe: Recipe | null = await RecipeTable.searchById(recipeId)
  if (!recipe) {
    throw errorAPI.notFound('Recipe not found')
  }

  const recipeDate = new Date(recipe.creation_date)

  const recipeDetails = {
    id: recipe.id,
    title: recipe.title,
    description: recipe.description,
    createdAt: recipeDate.toLocaleDateString(),
  }

  res.status(200).send({ recipeDetails })
})

export default route

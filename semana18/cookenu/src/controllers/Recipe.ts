import { Request, Response } from 'express'
import { RecipeTable } from '../model/Recipe'
import { UserTable } from '../model/User'
import { validateToken } from '../services/authentication'
import { formatToSQLDate } from '../services/dateManager'
import { generateId } from '../services/generateId'
import { Recipe } from '../types/Recipe'
import { authenticationData } from '../types/Token'
import { errorAPI } from '../utils/errorAPI'

async function recipeExist(recipeId: string) {
  const recipe: Recipe | null = await RecipeTable.searchById(recipeId)
  if (!recipe) {
    throw errorAPI.notFound('Recipe not found')
  }
  return recipe
}

async function userHaveRecipe(userId: string, recipeId: string) {
  const userRecipes = await UserTable.userRecipes(userId)
  if (!userRecipes?.some((recipe) => recipe.id === recipeId)) {
    throw errorAPI.unauthorized()
  }
}

export async function createRecipe(req: Request, res: Response) {
  const tokenData: authenticationData = validateToken(req.headers.authorization)

  const { title, description } = req.body

  const recipe: Recipe = {
    id: generateId(),
    title,
    description,
    creation_date: formatToSQLDate(new Date()),
    creator_id: tokenData.id,
  }

  await RecipeTable.create(recipe)

  res.status(201).send(recipe)
}

export async function searchRecipe(req: Request, res: Response) {
  validateToken(req.headers.authorization)
  const recipeId: string = req.params.id as string

  const recipe: Recipe | null = await recipeExist(recipeId)

  const recipeDate = new Date(recipe.creation_date)

  const recipeDetails = {
    id: recipe.id,
    title: recipe.title,
    description: recipe.description,
    createdAt: recipeDate.toLocaleDateString(),
  }

  res.status(200).send({ recipeDetails })
}

export async function editRecipe(req: Request, res: Response) {
  const tokenData = validateToken(req.headers.authorization)
  const { title, description }: Partial<Recipe> = req.body as Recipe
  const recipeId: string = req.params.id as string

  await recipeExist(recipeId)

  await userHaveRecipe(tokenData.id, recipeId)

  RecipeTable.updateRecipe({ id: recipeId, title, description })

  res.status(200).send({ title, description })
}

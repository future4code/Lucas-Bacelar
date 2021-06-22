import { Router } from 'express'
import { createRecipe, editRecipe, searchRecipe } from '../controllers/Recipe'
import { editRecipeSchema, recipeSchema } from '../validators/recipeValidation'
import { validateRequestSchema } from '../validators/validationMiddleware'
require('express-async-errors')

const route = Router()

route.post('/', recipeSchema, validateRequestSchema, createRecipe)

route.get('/:id', searchRecipe)

route.put('/:id', editRecipeSchema, validateRequestSchema, editRecipe)

export default route

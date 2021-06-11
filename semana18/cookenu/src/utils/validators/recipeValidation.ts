import { formatToSQLDate } from '../../services/dateManager'
import { generateId } from '../../services/generateId'
import { Recipe } from '../../types/Recipe'
import { errorAPI } from '../errorAPI'
import { hasAnyEmptyValue } from './validatorHelper'

export function recipeBodyValidation({
  title,
  description,
}: Recipe): Omit<Recipe, 'creator_id'> {
  if (hasAnyEmptyValue([title, description])) {
    throw errorAPI.wrongParams('Please fill all values: title, description')
  }

  return {
    id: generateId(),
    title,
    description,
    creation_date: formatToSQLDate(new Date()),
  }
}

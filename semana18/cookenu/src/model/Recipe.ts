import connection from '../connection'
import { Recipe } from '../types/Recipe'

const recipesTable = () => connection('Cookenu_Recipes')

export class RecipeTable {
  constructor() {}

  static async create(recipe: Recipe): Promise<void> {
    await recipesTable().insert(recipe)
  }

  static async searchById(id: string): Promise<Recipe | null> {
    const result = await recipesTable().where('id', id)
    return result[0]
  }
}

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

  static async getRecipesFeed(): Promise<Array<Recipe>> {
    const result: Array<Recipe> = await connection('Cookenu_Recipes as recipe')
      .select(
        'recipe.id',
        'recipe.title',
        'recipe.description',
        'recipe.creation_date as createdAt',
        'user.id as userId',
        'user.name as userName'
      )
      .innerJoin('Cookenu_Users as user', 'recipe.creator_id', 'user.id')
    return result
  }

  static async updateRecipe({
    id,
    title,
    description,
  }: Omit<Recipe, 'creation_date' | 'creator_id'>): Promise<void> {
    await recipesTable().update({ title, description }).where({ id })
  }
}

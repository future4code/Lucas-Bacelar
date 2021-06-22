import connection from '../connection'
import { Recipe } from '../types/Recipe'
import { User } from '../types/User'

const usersTable = () => connection('Cookenu_Users')

export class UserTable {
  constructor() {}

  static async create(user: User): Promise<void> {
    await usersTable().insert(user)
  }

  static async searchByEmail(email: string): Promise<User | null> {
    const result = await usersTable().where('email', email)
    return result[0]
  }

  static async searchById(id: string): Promise<User | null> {
    const result = await usersTable().where('id', id)
    return result[0]
  }

  static async userNotExist(id: string) {
    const result = await UserTable.searchById(id)
    if (!result) {
      return true
    }
    return false
  }

  static async userRecipes(id: string): Promise<Array<Recipe> | null> {
    const result: Array<Recipe> = await connection('Cookenu_Recipes as recipe')
      .innerJoin('Cookenu_Users as user', 'recipe.creator_id', 'user.id')
      .select(
        'recipe.id',
        'recipe.title',
        'recipe.description',
        'recipe.creation_date as createdAt',
        'user.id as userId',
        'user.name as userName'
      )
      .where('user.id', id)
    return result
  }
}

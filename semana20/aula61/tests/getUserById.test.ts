import UserBusiness from '../src/business/UserBusiness'
import UserDatabase from '../src/data/UserDatabase'
import { stringToUserRole, User } from '../src/model/User'

describe('getUserById', () => {
  beforeEach(async () => {
    await UserDatabase.createUser(
      new User(
        'id_mock_admin',
        'Astrodev',
        'astrodev@gmail.com',
        'password_mock_admin',
        stringToUserRole('ADMIN')
      )
    )
  })

  test('Should catch error when id is not registered', async () => {
    expect.assertions(2)

    try {
      await UserBusiness.getUserById('abc')
    } catch (error) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe('User not found')
    }
  })

  test('Should return respective user when id is registered', async () => {
    expect.assertions(2)

    try {
      const getUserById = jest.fn((id: string) => UserBusiness.getUserById(id))

      const result = await getUserById('id_mock_admin')

      expect(getUserById).toHaveBeenCalledWith('id_mock_admin')
      expect(result).toEqual({
        id: 'id_mock_admin',
        name: 'Astrodev',
        email: 'astrodev@gmail.com',
        role: 'ADMIN',
      })
    } catch (error) {
      console.log(error.message)
    }
  })

  afterEach(async () => {
    await UserDatabase.deleteUserById('id_mock_admin')
  })
})

import UserBusiness from '../src/business/UserBusiness'
import UserDatabase from '../src/data/UserDatabase'
import { stringToUserRole, User, USER_ROLES } from '../src/model/User'

describe('Get All Users', () => {
  beforeEach(async () => {
    await UserDatabase.createUser(
      new User(
        'id_mock_normal',
        'bananinha',
        'bananinha@gmail.com',
        'password_mock_normal',
        stringToUserRole('NORMAL')
      )
    )

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

  afterEach(async () => {
    await UserDatabase.deleteUserById('id_mock_admin')
    await UserDatabase.deleteUserById('id_mock_normal')
  })
  it('should return error 401 to unauthorized users', async () => {
    expect.assertions(2)
    try {
      await UserBusiness.getAllUsers('NORMAL')
    } catch (error) {
      expect(error.statusCode).toBe(401)
      expect(error.message).toBe('You must be an admin to access this endpoint')
    }
  })

  it('should return a array containing all users for successful requests', async () => {
    expect.assertions(3)

    try {
      const getAllUsersMock = jest.fn((role: USER_ROLES) =>
        UserBusiness.getAllUsers(role)
      )
      const result = await getAllUsersMock(USER_ROLES.ADMIN)
      expect(getAllUsersMock).toHaveBeenCalledWith(USER_ROLES.ADMIN)
      expect(result).toContainEqual({
        id: 'id_mock_admin',
        name: 'Astrodev',
        email: 'astrodev@gmail.com',
        role: 'ADMIN',
      })
      expect(result).toContainEqual({
        id: 'id_mock_normal',
        name: 'bananinha',
        email: 'bananinha@gmail.com',
        role: 'NORMAL',
      })
    } catch (error) {
      console.log(error.message)
    }
  })
})

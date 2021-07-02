import UserBusiness from '../src/business/UserBusiness'
import UserDatabase from '../src/data/UserDatabase'
import { stringToUserRole, User } from '../src/model/User'

describe('Get Profile', () => {
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
  })

  afterEach(async () => {
    await UserDatabase.deleteUserById('id_mock_normal')
  })

  it('should return error 404 when user is not found', async () => {
    expect.assertions(2)
    try {
      await UserBusiness.getProfile('id_mock_guest')
    } catch (error) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe('User not found')
    }
  })

  it('should return the user profile successful requests', async () => {
    expect.assertions(2)

    try {
      const getProfileMock = jest.fn((id: string) =>
        UserBusiness.getProfile(id)
      )
      const result = await getProfileMock('id_mock_normal')
      expect(getProfileMock).toHaveBeenCalledWith('id_mock_normal')
      expect(result).toEqual({
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

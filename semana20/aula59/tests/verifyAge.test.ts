import {
  LOCATION,
  NATIONALITY,
  VerifyAgeCasinoInputDTO,
  VerifyAgeUserInputDTO,
} from '../src/features/verifyAge/VerifyAgeDTO'
import { verifyAge } from '../src/features/verifyAge/VerifyAgeFeat'

describe('Verify Age - Simple', () => {
  describe('Cassino in Brazil', () => {
    const cassino: VerifyAgeCasinoInputDTO = {
      name: 'Brazilian',
      location: LOCATION.BRAZIL,
    }

    test('1 brazilian allowed', () => {
      const users: VerifyAgeUserInputDTO[] = [
        {
          name: 'Lucas',
          age: 21,
          nationality: NATIONALITY.BRAZILIAN,
        },
      ]
      const result = verifyAge(cassino, users)

      expect(result.brazilians.allowed).toEqual(['Lucas'])
    })
    test('1 american allowed', () => {
      const users: VerifyAgeUserInputDTO[] = [
        {
          name: 'Luke',
          age: 24,
          nationality: NATIONALITY.AMERICAN,
        },
      ]
      const result = verifyAge(cassino, users)

      expect(result.americans.allowed).toEqual(['Luke'])
    })
  })

  describe('Cassino in EUA', () => {
    const cassino: VerifyAgeCasinoInputDTO = {
      name: 'American',
      location: LOCATION.EUA,
    }

    test('no one allowed', () => {
      const user1: VerifyAgeUserInputDTO = {
        name: 'Luke',
        age: 19,
        nationality: NATIONALITY.AMERICAN,
      }
      const user2: VerifyAgeUserInputDTO = {
        name: 'Joao',
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      }
      const result = verifyAge(cassino, [user1, user1, user2, user2])

      expect(result.americans.unallowed).toEqual([user1.name, user1.name])
      expect(result.brazilians.unallowed).toEqual([user2.name, user2.name])
    })

    test('2 american allowed and 2 brazilians unallowed', () => {
      const user1: VerifyAgeUserInputDTO = {
        name: 'Luke',
        age: 21,
        nationality: NATIONALITY.AMERICAN,
      }
      const user2: VerifyAgeUserInputDTO = {
        name: 'Joao',
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      }

      const result = verifyAge(cassino, [user1, user1, user2, user2])

      expect(result.americans.allowed).toEqual([user1.name, user1.name])
      expect(result.brazilians.unallowed).toEqual([user2.name, user2.name])
    })
  })
})

describe('Verify Age - Complex', () => {
  describe('Brazilian Cassino', () => {
    const cassino: VerifyAgeCasinoInputDTO = {
      name: 'Brazilian',
      location: LOCATION.BRAZIL,
    }

    test('1 brazilian allowed, brazilian allowed array length less than 2 greater than 0', () => {
      const user1: VerifyAgeUserInputDTO = {
        name: 'Lucas',
        age: 22,
        nationality: NATIONALITY.BRAZILIAN,
      }

      const result = verifyAge(cassino, [user1])

      expect(result.brazilians.allowed.length).toBeGreaterThan(0)
      expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    test('1 american allowed, american unallowed array length less than 1', () => {
      const user1: VerifyAgeUserInputDTO = {
        name: 'Andy',
        age: 25,
        nationality: NATIONALITY.AMERICAN,
      }

      const result = verifyAge(cassino, [user1])

      expect(result.americans.unallowed.length).toBe(0)
    })
  })

  describe('American Cassino', () => {
    const cassino: VerifyAgeCasinoInputDTO = {
      name: 'American',
      location: LOCATION.EUA,
    }

    test('unallowed array has unallowed user names', () => {
      const user1: VerifyAgeUserInputDTO = {
        name: 'Luke',
        age: 19,
        nationality: NATIONALITY.AMERICAN,
      }
      const user2: VerifyAgeUserInputDTO = {
        name: 'Joao',
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      }
      const result = verifyAge(cassino, [user1, user1, user2, user2])

      expect(result.americans.unallowed).toContain(user1.name)
      expect(result.brazilians.unallowed).toContain(user2.name)
    })

    test('2 american allowed and 2 brazilians unallowed', () => {
      const user1: VerifyAgeUserInputDTO = {
        name: 'Luke',
        age: 21,
        nationality: NATIONALITY.AMERICAN,
      }
      const user2: VerifyAgeUserInputDTO = {
        name: 'Joao',
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      }

      const result = verifyAge(cassino, [user1, user1, user2, user2])

      expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
      expect(result.americans.unallowed.length).toBeLessThan(1)
      expect(result.americans.allowed.length).toBe(2)
    })
  })
})

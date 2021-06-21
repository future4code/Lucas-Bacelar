import {
  NATIONALITY,
  VerifyAgeCasinoInputDTO,
  VerifyAgeResultOutputDTO,
  VerifyAgeUserInputDTO,
} from './VerifyAgeDTO'

export function verifyAge(
  casino: VerifyAgeCasinoInputDTO,
  users: VerifyAgeUserInputDTO[]
): VerifyAgeResultOutputDTO {
  const ageRestriction = casino.location === 'BRAZIL' ? 18 : 21

  const resultObj: VerifyAgeResultOutputDTO = {
    brazilians: {
      allowed: [],
      unallowed: [],
    },
    americans: {
      allowed: [],
      unallowed: [],
    },
  }

  for (let user of users) {
    if (user.age >= ageRestriction) {
      if (user.nationality === NATIONALITY.BRAZILIAN) {
        resultObj.brazilians.allowed.push(user.name)
        continue
      }
      resultObj.americans.allowed.push(user.name)
    } else {
      if (user.nationality === NATIONALITY.BRAZILIAN) {
        resultObj.brazilians.unallowed.push(user.name)
        continue
      }
      resultObj.americans.unallowed.push(user.name)
    }
  }

  return resultObj
}

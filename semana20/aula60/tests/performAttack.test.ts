import { Character } from "../src/entities/Character";
import { performAttack } from "../src/features/performAttack/performAttack";
import { invalidValidatorMock, validValidatorMock } from "./mocks/performAttack/validatorMock";

test('Should perform attack', () => {
 const attacker: Character = {
    name: 'Lucas',
    health: 1000,
    strength: 250,
    defense: 10
  }
  
  const defender: Character = {
    name: 'Joao',
    health: 1000,
    strength: 10,
    defense: 50
  }

  performAttack(attacker, defender, validValidatorMock)

  expect(defender.health).toBe(800)
  expect(validValidatorMock).toHaveBeenCalled()
  expect(validValidatorMock).toHaveBeenCalledTimes(2)
  expect(validValidatorMock).toHaveReturnedTimes(2)
});

test("Shouldn't perform attack", () => {
  expect.assertions(4);

  const attacker: Character = {
     name: 'Lucas',
     health: 0,
     strength: 250,
     defense: 10
   }
   
   const defender: Character = {
     name: 'Joao',
     health: 1000,
     strength: 10,
     defense: 50
   }
 
   try {
     performAttack(attacker, defender, invalidValidatorMock)
   } catch(error) {
      expect(error.message).toBe('Invalid Character')
      expect(invalidValidatorMock).toHaveBeenCalled()
      expect(invalidValidatorMock).toHaveBeenCalledTimes(2)
      expect(invalidValidatorMock).toHaveReturnedTimes(2)
   }
  
 });

 test("Should defender don't lose health points", () => {
  const attacker: Character = {
     name: 'Lucas',
     health: 1000,
     strength: 250,
     defense: 10
   }
   
   const defender: Character = {
     name: 'Joao',
     health: 1000,
     strength: 10,
     defense: 250
   }
 
   performAttack(attacker, defender, validValidatorMock)
 
   expect(defender.health).toBe(1000)
   expect(validValidatorMock).toHaveBeenCalled()
   expect(validValidatorMock).toHaveBeenCalledTimes(2)
   expect(validValidatorMock).toHaveReturnedTimes(2)
 });

 
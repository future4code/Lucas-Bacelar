import { validateCharacter } from "../src/features/validateCharacter/validateCharacter";
import { validCharacter } from "./mocks/validateCharacter/characterMock";

test('Should return false for empty name', () => {
  const result = validateCharacter({...validCharacter, name: ''})
  expect(result).toBe(false)
});

describe('Person attributes equals 0', () => {
  test('Should return false for health 0', () => {
    const result = validateCharacter({...validCharacter, health: 0})
    expect(result).toBe(false)
  });

  test('Should return false for strength 0', () => {
    const result = validateCharacter({...validCharacter, strength: 0})
    expect(result).toBe(false)
  });

  test('Should return false for defense 0', () => {
    const result = validateCharacter({...validCharacter, defense: 0})
    expect(result).toBe(false)
  });
});

test('Should return false for strength -1', () => {
  const result = validateCharacter({...validCharacter, health: -1})
  expect(result).toBe(false)
});

test('Should return true for all valid inputs', () => {
  const result = validateCharacter(validCharacter)
  expect(result).toBe(true)
});

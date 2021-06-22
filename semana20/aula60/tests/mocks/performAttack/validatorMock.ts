import { Character } from "../../../src/entities/Character";

export const validValidatorMock = jest.fn((char: Character) => {
  return true
});

export const invalidValidatorMock = jest.fn((char: Character) => {
  return false
});

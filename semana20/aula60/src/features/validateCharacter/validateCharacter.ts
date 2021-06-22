import { Character } from "../../entities/Character";

export function validateCharacter(person: Character) {
  if(!person.name || !person.health || !person.defense || !person.strength) {
    return false;
  } else if(person.health <= 0 || person.defense  <= 0 || person.strength <= 0 ) {
    return false
  }

  return true
}
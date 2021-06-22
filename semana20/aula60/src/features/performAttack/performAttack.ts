import { Character } from "../../entities/Character";

// export function performAttack(attacker: Character, defender: Character ) {
//   const validAttacker = validateCharacter(attacker)
//   const validDefender = validateCharacter(defender)
  
//   if(!validAttacker || !validDefender) {
//     throw new Error("Invalid Character");
//   }

//   if(attacker.strength > defender.defense) {
//     defender.health -= attacker.strength - defender.defense;
//   }
// }

export function performAttack(attacker: Character, defender: Character, validator: (input: Character) => boolean ) {
  const validAttacker = validator(attacker)
  const validDefender = validator(defender)
  
  if(!validAttacker || !validDefender) {
    throw new Error("Invalid Character");
  }

  if(attacker.strength > defender.defense) {
    defender.health -= attacker.strength - defender.defense;
  }
}
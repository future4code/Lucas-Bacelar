enum AC {
  PRE_HISTORY = 'Pŕe-história',
  OLD_AGE = 'Idade Antiga',
}

enum DC {
  MIDDLE_AGE = 'Idade Média',
  MODERN_AGE = 'Idade Moderna',
  CONTEMPORARY_AGE = 'Idade Contemporânea',
}

function historicalAges(age: number, annoDomini: string = 'DC'): string {
  if (annoDomini !== 'AC' && annoDomini !== 'DC') {
    return 'Por favor coloque o annoDomini corretamente e.g historicalAges(1000, "AC")'
  } else if (isNaN(Number(age))) {
    return 'Por favor digite um ano válido'
  }

  if (annoDomini === 'AC') {
    if (age > 4000) {
      return AC.PRE_HISTORY
    } else {
      return AC.OLD_AGE
    }
  } else {
    if (age < 476) {
      return AC.OLD_AGE
    } else if (age < 1453) {
      return DC.MIDDLE_AGE
    } else if (age < 1789) {
      return DC.MODERN_AGE
    } else {
      return DC.CONTEMPORARY_AGE
    }
  }
}

console.log('Com 2º parametro para AC |', historicalAges(1000, 'AC'))
console.log('Sem 2º parametro |', historicalAges(1000))

function fatorialAnagrama(numero: number): number {
  if (numero === 0 || numero === 1) {
    return 1
  }
  const resultado = numero * fatorialAnagrama(numero - 1)
  return resultado
}

type occurrenceCounter = {
  [key: string]: number
}

function contadorAnagramaAux(palavra: string): occurrenceCounter {
  const counterObj: occurrenceCounter = palavra
    .toLowerCase()
    .split('')
    .reduce((objAcc: occurrenceCounter, char: string) => {
      objAcc[char] = objAcc[char] ? objAcc[char] + 1 : 1
      return objAcc
    }, {})

  for (const key in counterObj) {
    if (counterObj[key] === 1) {
      delete counterObj[key]
    }
  }

  return counterObj
}

function contadorAnagrama(palavra: string): number {
  const counterObj: occurrenceCounter = contadorAnagramaAux(palavra)

  const counterKeys = Object.keys(counterObj)

  if (counterKeys.length === 1) {
    const letterCount = counterObj[counterKeys[0]]
    return fatorialAnagrama(palavra.length) / fatorialAnagrama(letterCount)
  } else {
    return fatorialAnagrama(palavra.length)
  }
}

console.log(
  "O numero de anagramas da palavra 'Anagrama' é de :",
  contadorAnagrama('Anagrama')
)

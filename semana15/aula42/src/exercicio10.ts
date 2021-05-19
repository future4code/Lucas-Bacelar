const entradaString: string = 'abcd'

function inverterString(entrada: string) {
  const stringInvertida = entrada.split('').reverse().join('')
  return stringInvertida
}

console.log('String de entrada: ', entradaString)
console.log('String invertida: ', inverterString(entradaString))

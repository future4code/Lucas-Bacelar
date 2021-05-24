const entradaDNA = 'ATTGCTGCGCATTAACGACGCGTA'

function converterDNAParaRNA(amostra: string) {
  const stringArr: Array<string> = amostra.split('')
  const RNA = stringArr.map((letra) => {
    switch (letra) {
      case 'A':
        return 'U'
      case 'T':
        return 'A'
      case 'C':
        return 'G'
      case 'G':
        return 'C'
      default:
        return letra
    }
  })
  return RNA.join('')
}
console.log('Entrada inicial de DNA: ', entradaDNA)
console.log('Saida em RNA: ', converterDNAParaRNA(entradaDNA))

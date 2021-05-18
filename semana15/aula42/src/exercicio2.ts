// a

// A entrada é um array de numeros
// A saida é um objeto com as estatiticas do array

// b

// a variável numerosOrdenados do tipo Array<number>
// variável soma do tipo number
// a variável estatisticas do tipo estatistica

type Estatistica = {
  maior: number
  menor: number
  media: number
}

type amostraDeDados = {
  numeros: Array<number>
  obterEstatisticas: (numeros: Array<number>) => Estatistica
}

function obterEstatisticas(numeros: Array<number>): Estatistica {
  const numerosOrdenados: Array<number> = numeros.sort((a, b) => a - b)

  let soma: number = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas: Estatistica = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  }

  return estatisticas
}

const amostraDeIdades: amostraDeDados = {
  numeros: [2, 3],
  obterEstatisticas: obterEstatisticas,
}

const amostraEstatisticas = amostraDeIdades.obterEstatisticas(
  amostraDeIdades.numeros
)
console.log(amostraEstatisticas)

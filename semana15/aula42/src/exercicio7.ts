enum DESCONTO {
  VERAO = 0.05,
  INVERNO = 0.1,
  BANHO = 0.04,
  INTIMA = 0.07,
}

enum CLASSIFICACAO {
  VERAO = 'VERAO',
  INVERNO = 'INVERNO',
  BANHO = 'BANHO',
  INTIMA = 'INTIMA',
}

type Produto = {
  nome: string
  preco: number
  classificacao: CLASSIFICACAO
}

type ProdutoComDesconto = {
  nome: string
  preco: number
  classificacao: CLASSIFICACAO
  precoComDesconto: number
}

const listaDeProdutos: Array<Produto> = [
  {
    nome: 'Casaco',
    preco: 100,
    classificacao: CLASSIFICACAO.INVERNO,
  },
  {
    nome: 'Sunga',
    preco: 100,
    classificacao: CLASSIFICACAO.VERAO,
  },
  {
    nome: 'Cueca Box',
    preco: 100,
    classificacao: CLASSIFICACAO.INTIMA,
  },
  {
    nome: 'Toalha',
    preco: 100,
    classificacao: CLASSIFICACAO.BANHO,
  },
]

function aplicarDesconto(produtos: Array<Produto>): Array<ProdutoComDesconto> {
  const produtosComDesconto: Array<ProdutoComDesconto> = produtos.map(
    (produto) => {
      return {
        nome: produto.nome,
        preco: produto.preco,
        classificacao: produto.classificacao,
        precoComDesconto:
          produto.preco - produto.preco * DESCONTO[produto.classificacao],
      }
    }
  )
  return produtosComDesconto
}

console.table(aplicarDesconto(listaDeProdutos))

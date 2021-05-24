type Prato = {
  nome: string
  custo: number
  valorDeVenda: number
  ingredientes: Array<string>
}

type Venda = {
  prato: string
  cliente: string
  valor: number
  custo: number
}

let cardapio: Array<Prato> = []
let vendas: Array<Venda> = []

function cadastrarProduto(produto: Prato): void {
  if (produto) {
    cardapio = [...cardapio, produto]
    console.log(`Produto ${produto.nome} cadastrado com sucesso!`)
  } else {
    console.log('Por favor coloque os dados corretos do produto')
  }
}

function procurarProduto(produto: string): number | void {
  const pratoPesquisado = cardapio.find((prato) => prato.nome === produto)
  if (pratoPesquisado) {
    return pratoPesquisado.valorDeVenda
  } else {
    console.log('O produto pesquisado não existe na lista de cardapios')
  }
}

function venderPrato(pratoPedido: string, cliente: string): void {
  const pratoPesquisado = cardapio.find((prato) => prato.nome === pratoPedido)
  if (pratoPesquisado) {
    const cadastroVenda = {
      cliente: cliente,
      prato: pratoPedido,
      valor: pratoPesquisado.valorDeVenda,
      custo: pratoPesquisado.custo,
    }
    vendas = [...vendas, cadastroVenda]
    console.log(`Prato ${pratoPedido} vendido com sucesso!`)
  } else {
    console.log('O prato pedido não foi encontrado no cardapio')
  }
}

function lucroRestaurante(): number {
  const lucro = vendas.reduce((acc, venda) => {
    return acc + (venda.valor - venda.custo)
  }, 0)
  return lucro
}

cadastrarProduto({
  nome: 'Feijoada',
  custo: 15,
  valorDeVenda: 30,
  ingredientes: ['feijao', 'carne'],
})

cadastrarProduto({
  nome: 'Moqueca',
  custo: 30,
  valorDeVenda: 55,
  ingredientes: ['peixe', 'azeite', 'tempero'],
})

venderPrato('Moqueca', 'Lucas')
venderPrato('Feijoada', 'Joao')

console.log('O preço de uma moqueca é', procurarProduto('Moqueca'), 'reais')
console.log('O lucro do restaurante é de', lucroRestaurante(), 'reais')

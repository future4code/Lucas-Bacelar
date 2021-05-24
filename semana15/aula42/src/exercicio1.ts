// 1

// a
// Ocorre um erro de tipos já que uma string não pode receber numeros;
// let minhaString: string = 2;

// b
// Podemos usar os union types para fazer com que ela também aceite uma string ( number | string )
// let meuNumero: number = 10;

// c

enum Cores {
  VERMELHO = 'vermelho',
  LARANJA = 'laranja',
  AMARELO = 'amarelo',
  VERDE = 'verde',
  AZUL = 'azul',
  INDIGO = 'indigo',
  VIOLETA = 'violeta',
}

type Pessoa = {
  nome: string
  idade: number
  corFavorita: Cores
}

const pessoa1: Pessoa = {
  nome: 'Lucas',
  idade: 20,
  corFavorita: Cores.AZUL,
}

const pessoa2: Pessoa = {
  nome: 'Carlos',
  idade: 22,
  corFavorita: Cores.VERDE,
}

const pessoa3: Pessoa = {
  nome: 'Maria',
  idade: 30,
  corFavorita: Cores.VERMELHO,
}

const pessoa4: Pessoa = {
  nome: 'Joao',
  idade: 19,
  corFavorita: Cores.AZUL,
}

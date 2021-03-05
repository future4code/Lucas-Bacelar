//Exercício 1

function inverteArray(array) {
  // Solução com o forEach***********

  // let novoArray = []

  // array.forEach((item) => {
  //    novoArray.unshift(item)
  // })

  // return novoArray

  // Solução com loop for************

  // let tamanho = array.length
  // let final = tamanho - 1
  // for(let i = 0; i < (tamanho / 2); i++) {
  //    let temp
  //    temp = array[i]
  //    array[i] = array[final - i]
  //    array[final - i] = temp
  // }

  // return array

  // Solução com função nativa*******

  return array.reverse();
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
  let novoArray = array.filter((item) => {
    return item % 2 === 0;
  });

  return novoArray.map((item) => {
    return item * item;
  });
}

//Exercício 3

function retornaNumerosPares(array) {
  return array.filter((item) => {
    return item % 2 === 0;
  });
}

//Exercício 4

function retornaMaiorNumero(array) {
  let maiorNumero = array[0];

  array.forEach((item) => {
    if (item > maiorNumero) {
      maiorNumero = item;
    }
  });

  return maiorNumero;
}

//Exercício 5

function retornaQuantidadeElementos(array) {
  // Variável para contagem
  // let quantidade = 0

  // Solução com forEach

  // array.forEach((item) => {
  //    quantidade++
  // })

  // Solução com loop while

  // while(array[quantidade] !== undefined)
  // {
  //    quantidade++
  // }

  // return quantidade

  // Solução com função nativa

  return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
  // Solução em que o pc faz o trabalho pra mim kkk

  //   const booleano1 = true;
  //   const booleano2 = false;
  //   const booleano3 = !booleano2; true
  //   const booleano4 = !booleano3; false

  //   let a = booleano1 && booleano2 && !booleano4
  //   let b = (booleano1 && booleano2) || !booleano3
  //   let c = (booleano2 || booleano3) && (booleano4 || booleano1)
  //   let d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  //   let e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  //   return [a, b, c, d, e]

  // Retorno das respotas em um array
  return [false, false, true, true, true];
}

//Exercício 7

function retornaNNumerosPares(n) {
  let array = [];

  for (let contador = 0, numero = 0; contador < n; contador++) {
    array.push(numero);
    numero += 2;
  }

  return array;
}
// Exercício 8

function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
  let menor;
  let objNumero = {
    maiorNumero: 0,
    maiorDivisivelporMenor: false,
    diferenca: 0,
  };

  if (num1 > num2) {
    objNumero.maiorNumero = num1;
    menor = num2;
  } else {
    objNumero.maiorNumero = num2;
    menor = num1;
  }

  objNumero.maiorDivisivelporMenor =
    objNumero.maiorNumero % menor == 0 ? true : false;

  objNumero.diferenca = objNumero.maiorNumero - menor;

  return objNumero;
}

// Exercício 10

function segundoMaiorEMenor(array) {
  let arrayNovo = [];
  let segundoMaior, segundoMenor;
  let maior = array[0];
  let menor = array[0];

  // Pegando os primeiro maior e o primeiro menor
  for (let numero of array) {
    if (numero > maior) {
      maior = numero;
    }
    if (numero < menor) {
      menor = numero;
    }
  }

  // Colocando a menor variável no segundoMaior pra que possa checar todos os numeros maiores que ele
  // E vice versa pra o segundoMenor
  segundoMaior = menor;
  segundoMenor = maior;

  // Teste de numeros que forem maiores e menores que eles, e diferentes dos primeiro maior e menor
  for (let numero of array) {
    if (numero > segundoMaior && numero !== maior) {
      segundoMaior = numero;
    }
    if (numero < segundoMenor && numero !== menor) {
      segundoMenor = numero;
    }
  }

  // Inserindo segundo maior e menor no array
  arrayNovo.push(segundoMaior);
  arrayNovo.push(segundoMenor);

  return arrayNovo;
}

//Exercício 11

function ordenaArray(array) {
  let tamanho = array.length;

  let temp;
  for (let i = 0; i < tamanho; i++) {
    indexMin = i;
    for (let j = i + 1; j < tamanho; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }
    temp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = temp;
  }

  return array;
}

// Exercício 12

function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };

  return filme;
}

// Exercício 13

function imprimeChamada() {
   const filme = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
    };

    let string = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por`
    atores = filme.atores

    atores.forEach((ator, index) => {
       if(index === atores.length - 1) {
         string += ` ${ator}.`
       }
       else {
         string += ` ${ator},`
       }
    })

    return string
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  let retangulo = {
     largura: lado1,
     altura: lado2,
     perimetro: (2 * (Number(lado1) + Number(lado2))),
     area: (Number(lado1) * Number(lado2))
  }

  return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  pessoa.nome = "ANÔNIMO"

  return pessoa
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
  return arrayDePessoas.filter((pessoa) => {
     return pessoa.idade >= 20
  })
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   return arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 20
   })
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  return array.map((item) => {
      return item * 2
  })
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   return array.map((item) => {
      return String(item * 2)
  })
}

// Exercício 17, letra C

function verificaParidade(array) {
   return array.map((item) => {
      if( item % 2 === 0) {
         return `${item} é par`
      }
      return `${item} é ímpar`
  })
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   return pessoas.filter((pessoa) => {
      return (pessoa.altura > 1.5 && (pessoa.idade > 14 && pessoa.idade < 60))
   })
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   return pessoas.filter((pessoa) => {
      return (pessoa.altura < 1.5 || (pessoa.idade <= 14 || pessoa.idade >= 60))
   })
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

function retornaEmailConsulta() {
  let mensagem = []
  let string
  let prefixo, palavra;
   consultas.forEach((pessoa) => {
      if(pessoa.genero === "masculino") {
         prefixo = "Sr."
         palavra = "lembrá-lo"
      }
      else {
         prefixo = "Sra."
         palavra = "lembrá-la"
      }

     if(pessoa.cancelada === false) {
      string = `Olá, ${prefixo} ${pessoa.nome}. Estamos enviando esta mensagem para ${palavra} da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse o recebimento deste-email.`
     }
     else {
      string = `Olá, ${prefixo} ${pessoa.nome}. Infelizmente sua consulta marcada para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
     }
     mensagem.push(string)
  })

  return mensagem
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function atualizaSaldo() {
  contas.forEach((conta) => {
     let valorCompras = 0
     conta.compras.forEach((compra) => {
      valorCompras += compra
     })
     conta.saldoTotal -= valorCompras
  })

  return contas
}

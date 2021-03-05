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

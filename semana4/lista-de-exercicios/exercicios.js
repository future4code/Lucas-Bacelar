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

// Enunciado
// Interpretação

// Exercicio 1

// a. Está definindo uma variável chamado valor e somando todos numeros inteiros entre 1 e 4 a esse valor

// b. O resultado impresso é 10

// Exercicio 2

// a. Todos os numeros da lista maiores que 18, no caso [19, 21, 23, 25, 27, 30]

// b. Se o indice dito for apenas o valor para ser impresso, sim o for...of... pode acessar 
// os valores do array mas apenas como cópia, não podendo fazer alteração no array.

// Se for para acessar o numero do indice de cada item, o for...of... não é o loop recomendado 
// pra esse tipo de operação.

// Desafio 1

// a. o resultado seria 0
//                      00
//                      000
// 	                 0000

// Sendo que o for mais interno vai adicionar a quantidade de "0" referente ao valorda variável 
// "quantidadeAtual" + 1 e dar console log e adicionar +1 a variável até chegar em 4 e parar o loop externo;

// Escrita

// Exercicio 3

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novoArray = []
let valorMaximo = array[0]
let valorMinimo = array[0]


// a. Escreva um programa que:---------------------------------------------
// - **Imprima** cada um dos valores do array original.

// for(let num of array){
//     console.log(num);
// }


// b. Escreva um programa que: ---------------------------------------------
// - **Imprima** cada um dos valores do array original divididos por 10

// for(let num of array){
//     console.log(num / 10);
// }


// c. Escreva um programa que:
// - **Crie** um novo array contendo, somente, os números pares do array original.
// - **Imprima** esse novo array

// for(let num of array){
//     if(num % 2 == 0){
//         novoArray.push(num)
//     }
// }
// console.log(novoArray);


// d. Escreva um programa que:

// - **imprima** o index e os valores do array da seguinte forma: "O elemento do índex `i` é: `numero`"
// - **Imprima** este novo array

// for(let i = 0; i < array.length; i++){
//     let arrString = 'O elemento do index ' + i + ' é ' + array[i]
//     novoArray.push(arrString)
// }

// console.log(novoArray);

// e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

for(let num of array){
    if(num > valorMaximo){
        valorMaximo = num;
    }

    if(num < valorMinimo){
        valorMinimo = num;
    }
}

console.log("O maior numero é ", valorMaximo, " e o menor é ", valorMinimo);
// Enunciado
// Interpretação
// Exercicio 1

// a. Vai  ser impresso o número 10 e depois o numero 50
// b. Não apareceria nada, pois o que faz o resultado de retorno ser impresso é o console.log

// Exercicio 2

// a. Vão ser impressos as strings "Darvas" e "Caio" no console
// b. Vão ser impressas as strings "Amanda" e "Caio" respectivamente

// Exercicio 3

// a. Essa função filtra todos os numeros pares, e insere eles no array "arrayFinal" ao quadrado
// b. Um nome para função seria, parAoQuadrado


// Escrita

// // Exercicio 4

// // a.
// function bioSemParametro() {
//     console.log("Eu sou Lucas, tenho 22 anos, moro em Camaçari e sou estudante.");
// }

// // b.
// function bioComParametro(nome, idade, cidade, ehEstudante) {
//     let estudante;
//     if(ehEstudante) {
//         estudante = "sou"
//     }
//     else {
//         estudante = "nao sou"
//     }

//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante.`);
// }

// // Exercicio 5

// // a.
// function somaDoisNumeros(a, b) {
//     return a + b;
// }

// console.log(somaDoisNumeros(1, 2));

// // b.
// function maiorPrimeiro(a, b) {
//     return a > b;
// }

// // c.
// function imprimeDezVezes(string) {
//     for(let i = 0; i < 10; i++) {
//         console.log(string);
//     }
// }

// // Exercicio 6

// const arrayEnunciado = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// // a.
// function tamanhoArray(array) {
//     return array.length
// }

// // b.
// function ehPar (numero) {
//     return numero % 2 === 0
// }

// // c.
// function qtdPar(array) {
//     let quantidade = 0;
//     for(let par of array) {
//         if(par % 2 === 0) {
//             quantidade++;
//         }
//     }
//     return quantidade;
// }

// // d.
// function qtdParAninhado (array) {
//     let quantidade = 0;
//     for(let par of array) {
//         if(ehPar(par)){
//             quantidade++;
//         }
//     }
//     return quantidade
// }
// console.log("a. ", tamanhoArray(arrayEnunciado));
// console.log("b. ", ehPar(arrayEnunciado[0]));
// console.log("c. ", qtdPar(arrayEnunciado));
// console.log("d. ", qtdParAninhado(arrayEnunciado));

// Desafios

// Desafio 1 

// // a.
// let imprimeParametro = (parametro) => {
//     console.log(parametro);
// }

// // b.
// let imprimeSomaParametros = (a, b) => {
//     imprimeParametro(a + b)
// }

// Desafio 2

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// a.
function parVezesDois(array) {
    let novoArray = []

    for(let numero of array) {
        if(numero % 2 === 0){
            novoArray.push(numero * 2)
        }
    }
    return novoArray
}

// b.
function maiorNumeroArray(array) {
    let maiorNumero = array[0]

    for(let numero of array) {
        if(numero > maiorNumero) {
            maiorNumero = numero
        }
    }
    return maiorNumero
}

// c.

function maiorNumeroIndex(array) {
    let index = 0
    let maiorNumero = array[0]

    for(let i = 0, j = array.length; i < j; i++) {
        if(array[i] > maiorNumero) {
            maiorNumero = array[i]
            index = i
        }
    }
    return index
}

// d.

function inverteArray(array) {
    let novoArray = []

    for(let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i])
    }
    
    return novoArray
}





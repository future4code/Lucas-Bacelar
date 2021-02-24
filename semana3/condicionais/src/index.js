// *ENUNCIADO --------------------------------------------------------------------------------------

// INTERPRETAÇÃO --------------------------------------------

// Exercicio 1 ------------

// a. O código checa se um numero é par ou não
// b. Ele checa se o resto da divisão do numero por 2 é igual a 0
// c. Para numeros em que o resto da divisão por 2 é igual a 0 ou seja numeros pares.
// d. Para numeros impares, cujo resto da divisão não é 0.

// Exercicio 2 -------------

// a. O código serve para mostrar o preço da fruta escolhida pelo usuário.
// b. R$ 2,25.
// c. A mensagem seria "O preço da fruta pêra é R$5"

// Exercicio 3 -------------

// a. Está pedindo um numero ao usuário que vem no tipo "string" e está convertendo ele pra o tipo "number".
// b. Se o numero fosse 10 ele imprimiria "Esse número passou no teste", se não se fosse -10 ele não imprimiria mensagem nenhuma.
// c. Sim hávera, pois o escopo pai está chamando a variável "mensagem" que só existe no escopo filho, fazendo com que ocorra 
// um erro de variável não declarada.


// ESCRITA ----------------------------------------------------


// Exercicio 4 --------------

// let idadeMotorista = Number(prompt("Olá, diga nos sua idade"))

// if(idadeMotorista >= 18) {
//     console.log("Você pode dirigir")
// }
// else {
//     console.log("Você não pode dirigir")
// }


// Exercicio 5 --------------

// let turnoIfElse = prompt("Digite a letra correspondente ao turno em que você estuda sendo: M(matutino), V(vespertino) e N(noturno)")

// if(turnoIfElse === "M"){
//     console.log("Bom dia")
// }
// else if(turnoIfElse === "V"){
//     console.log("Boa tarde")
// }
// else if(turnoIfElse === "N"){
//     console.log("Boa noite")
// }
// else {
//     console.log("Letra invalida, por favor digite novamente")
// }


// Exercicio 6 ---------------

// let turnoSwitch = prompt("Digite a letra correspondente ao turno em que você estuda sendo: M(matutino), V(vespertino) e N(noturno)")

// switch(turnoSwitch) {

//     case 'M':
//         console.log("Bom dia")
//         break
//     case 'V':
//         console.log("Boa tarde")
//         break
//     case 'N':
//         console.log("Boa noite")
//         break
//     default:
//         console.log("Letra invalida, por favor digite novamente")
//         break
// }


// Exercicio 7 ---------------

// let generoFilme, preçoIngresso

// generoFilme = prompt("Qual o genero do filme?")
// preçoIngresso = Number(prompt("Qual o valor do ingresso?"))

// if(generoFilme === "fantasia" && preçoIngresso < 15 ) {
//     console.log("Bom filme!")
// }

// else {
//     console.log("Escolha outro filme :(")
// }

// *DESAFIOS --------------------------------------------------------------------------------------




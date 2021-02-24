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


// Desafio 1 ---------------

// let generoFilme, preçoIngresso

// generoFilme = prompt("Qual o genero do filme?")
// preçoIngresso = Number(prompt("Qual o valor do ingresso?"))

// if(generoFilme === "fantasia" && preçoIngresso < 15 ) {
//     let snack = prompt("Qual snack você quer comprar?")
//     console.log("Bom filme!")
//     console.log("... com", snack)
// }

// else {
//     console.log("Escolha outro filme :(")
// }


// Desafio 2 ---------------

// definir cotação pela qual valor vai ser dividido

let nome, tipoJogo, etapaJogo, categoria, qntdIngresso
let cotação, moeda
let valorIngresso, valorTotal
let tipoJogoNome, etapaJogoNome

const semifinais = [1320, 880, 550, 220]
const dt = [660, 440, 330, 170]
const finais = [1980, 1320, 880, 330]

nome = prompt("Qual seu nome completo?")
tipoJogo = prompt("Qual o tipo de jogo que você deseja assitir, digite IN para internacional e DO para doméstico")
etapaJogo = prompt("Qual a etapa de jogo?, digite SF para semi-final; DT para decisão de terceiro lugar e FI para final")
categoria = Number(prompt("Digite a categoria?, as opçoes sao 1, 2, 3 ou 4"))
qntdIngresso = Number(prompt("Qual a quantidade de ingressos?"))


if( !(tipoJogo === "IN" || tipoJogo ===  "DO")) {
    console.log("Tipo de jogo inválido")
}

else if( !(etapaJogo === "SF" || etapaJogo === "DT" ||  etapaJogo === "FI")){
    console.log("Etapa de jogo inválida")
}

else if( !(categoria >= 1 && categoria <= 4)) {
    console.log("Categoria inválida")
}

else if(qntdIngresso < 0) {
    console.log("Quantidade de ingressos inválida")
}

else {
    switch(tipoJogo) {
        case "IN":
            cotação = 4.10
            moeda = "U$"
            tipoJogoNome = "Internacional"
            break
        case "DO":
            cotação = 1
            moeda = "R$"
            tipoJogoNome = "Nacional"
            break
    }
    
    switch(etapaJogo) {
        case "SF":
            etapaJogoNome = "semi-final"
            valorIngresso = semifinais[categoria - 1] / cotação
            break
        case "DT":
            etapaJogoNome = "decisão de terceiro lugar"
            valorIngresso = dt[categoria - 1] / cotação
            break
        case "FI":
            etapaJogoNome = "final"
            valorIngresso = finais[categoria - 1] / cotação

            break
    }

    console.log("---Dados da compra---")
    console.log("Nome do Cliente:", nome)
    console.log("Tipo do jogo:", tipoJogoNome)
    console.log("Etapa do jogo:", etapaJogoNome)
    console.log("Categoria:", categoria)
    console.log("Quantidade de Ingressos: ", qntdIngresso)
    console.log("---Valores---")
    console.log("Valor do ingresso:", valorIngresso)
    console.log("Valor total:", moeda, valorIngresso * qntdIngresso)
}





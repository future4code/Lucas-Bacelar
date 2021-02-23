// INTERPRETAÇÃO --------------------------------------------------------------------------

// 1ª questão ----------------------------------

// a. vai imprimir false
// b. vai imprimir false
// c. vai imprimir true
// d. o tipo vai ser 'boolean'

// 2ª questão ----------------------------------

// a. vai imprimir o tipo undefined
// b. vai imprimir o tipo null
// c. vai imprimir o valor 10
// d. vai imprimir o valor 3
// e. vai imprimir [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. vai imprimir o valor 9


// ESCRITA ----------------------------------------------------------------------------------

// 1ª questão --------------------------------------

let idadeUsuário, idadeAmigo, diferença

idadeUsuário = prompt("Olá, qual é a sua idade?")
idadeAmigo = prompt("E qual a idade do seu melhor amigo?")
diferença = Number(idadeUsuário) - Number(idadeAmigo)

if(diferença < 0) {
    diferença *= -1;
}

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuário > idadeAmigo)
console.log("A diferença de idade de vocês é de", diferença, "anos")


// 2ª questão --------------------------------------

let numeroPar;

numeroPar = Number(prompt("Digite um numero par"))

console.log("O resto da divisão por 2 é", numeroPar % 2)

// c. notei que o resto da divisão de todos numeros pares é 0
// d. sempre que é adicionado um numero impar o resultado é 1


// 3ª questão --------------------------------------

let listaDeTarefas = []
let tarefaAtual, indice

tarefaAtual = prompt("Qual a primeira tarefa?")
listaDeTarefas.push(tarefaAtual)

tarefaAtual = prompt("Qual a segunda tarefa?")
listaDeTarefas.push(tarefaAtual)

tarefaAtual = prompt("Qual a tereceira tarefa?")
listaDeTarefas.push(tarefaAtual)

console.log(listaDeTarefas)

indice = Number(prompt("Digite o indice de uma das tarefas já realizadas eles são 0, 1 e 2"))
listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas)

// 4ª questão --------------------------------------

let emailDoUsuario, nomeDoUsuario

nomeDoUsuario = prompt("Olá, qual o seu nome?")
emailDoUsuario = prompt("E qual o seu email?")

console.log("O email", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o),", nomeDoUsuario, "!")





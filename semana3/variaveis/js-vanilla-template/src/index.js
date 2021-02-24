//------------------------------------- Exercicio de interpretação de código

// Ao responder o exercicio estou assumindo que as 
// variaveis a, b e c foram declaradas anteriormente através do let

//---- 1 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// o primeiro console.log vai imprimir o valor 10
// o segundo console.log irá imprimir o valor 10 e o valor 5


//----- 2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// o console.log irá imprimir 10 10 10;



//------------------------------------- Exercicio de escrita de código

//1ª questão---------------------------------------------------------------------------------

console.log('Primeira questão ---------------------------------------------------')

let nome, idade;

console.log(typeof nome)
console.log(typeof idade)

// O tipo undefined foi impresso pois a variável não foi inicializada com nenhum valor

nome = prompt('Qual é o seu nome?')
idade = prompt('Qual é a sua idade?')

console.log(typeof nome)
console.log(typeof idade)

// Que o tipo que o prompt retorna é sempre string independente se for nome ou numero

console.log('Olá', nome, ', você tem', idade, 'anos.')

//2ª questão---------------------------------------------------------------------------------

console.log('Segunda questão ---------------------------------------------------')

let cor, fruta, esporte, hobbie, cidade;

console.log('1. Qual sua cor favorita')
cor = prompt('1. Qual sua cor favorita')
console.log('Resposta:', cor)

console.log('2. Qual sua fruta predileta?')
fruta = prompt('2. Qual sua fruta predileta??')
console.log('Resposta:', fruta)

console.log('3. Qual seu esporte preferido?')
esporte = prompt('3. Qual seu esporte preferido?')
console.log('Resposta:', esporte)

console.log('4. Qual seu hobbie favorito?')
hobbie = prompt('4. Qual seu hobbie favorito?')
console.log('Resposta:', hobbie)

console.log('5. Em qual cidade você mora?')
cidade = prompt('5. Em qual cidade você mora?')
console.log('Resposta:', cidade)


//3ª questão----------------------------

console.log('Terceira questão ---------------------------------------------------')

let comidasFavoritas = ['farofa', 'bolo de mandioca', 'pirão', 'vitamina de abacate', 'cuzcuz']
let comidaUsuario;

console.log(comidasFavoritas)

console.log('Essas são minhas comidas preferidas: ')
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

comidaUsuario = prompt('Qual a sua comida preferida?')

comidasFavoritas[1] = comidaUsuario

console.log(comidasFavoritas)

//4ª questão----------------------------

console.log('Quarta questão ---------------------------------------------------')

let perguntas = ['Você já se exercitou hoje?', 'Você já lavou os pratos?', 'Você já bebeu agua hoje?']
let respostas = [true, false, true]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])
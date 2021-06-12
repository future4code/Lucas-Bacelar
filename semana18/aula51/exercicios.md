# Exercicios | Aula 51 - Introdução a Autenticação

## Exercicio 1

### a) Usar strings nos possibilita ter mais opçoes e caracteres para adicionar na senha, deixando-a mais forte, e o uso delas assim é melhor do que usar apenas numeros.

## Exercicio 2

### a) O programa cria uma instancia de uma conexão com o banco de dados e armazena ela na variável **connection**, então ele cria uma função que permite criar um usuário, com os dados passados que são id, email e password.

### b) 

```sql
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

## Exercicio 3

### a) Ela diz que o valor que da variável de ambiente JWT_KEY é uma string, precisamos dela pois a chave para a criptografia precisar ser uma string.

## Exercicio 7

### a) Diz que o valor de retorno do jwt.verify pode ser de qualquer tipo, usamos ela já que não sabemos o tipo que a função vai retornar.
# Exercicios | Aula 52 - Criptografia e User Roles

## Exercicio 1 

### a)
**Round** - É o custo de processamento ao utilizar o bcrypt, quanto maior o numero de rounds, maior o custo de processamento.

**Salt** - Uma string colocada junto com o hash do password para aumentar sua segurança, e evitar ataques de rainbown table.

O numero recomendado de rounds a se usar no bcrypt é de **12**, eu utilizei o valor 12 por que é o recomendado.

## Exercicio 2

### a) 
O cadastro pois só poderemos fazer os outros testes se a senha cadastrada já estiver armazenada como um hash.

### d) 
Não temos que modificar esse endpoint já que não precisamos utilizar a senha para fazer sua função.

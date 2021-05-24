# AULA 45 | SQL | Exercicios
## Exercicio 1

#### a) 
- **CREATE TABLE** - Cria uma nova tabela com o nome dado, 
- **VARCHAR(n)** - Faz com que o tipo da coluna seja uma string e o n é o numero máximo de caracteres
- **DATE** - Faz com que o tipo da coluna seja data.
- **NOT NULL** - Faz com que não seja possivel não atribuir valores ou atribuir valores nulos a aquela tabela.
- **PRIMARY KEY** - Faz com que aquela coluna da tabela seja um identificador unico.

#### b) 
- **SHOW DATABASES** - Mostra todas os banco de dados que o usuário possui.
- **SHOW TABLES** - Mostra todas as tabelas que o banco de dados selecionado possui.

#### c)
- **DESCRIBE** - O comando describe mais o nome da tabela desejada, mostra todos os dados das colunas da tabela, como por exemplo, seus nomes, tipos, a chave primária dela, e se as colunas aceitam valores nulos.

## Exercicio 2

#### a)
~~~~sql 
INSERT INTO Actor (id, name, salary, birth_date, gender)  
VALUES (  
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);
~~~~


#### b) 
A mensagem do erro acusava uma primary key duplicada, pois a primary key do numero que queriamos adicionar já existia. </br>  O erro aconteceu por que já existia uma primary key com o mesmo numero

#### c)
A inserção da atora falhou, pois o query passado estava incorreto e faltando os parâmetros (birth_date e gender).

~~~~sql 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~~

#### d)
O erro aconteceu por que o campo **name** não pode ser um valor nulo, já que ele não tem valor default e é declarado como **NOT NULL**

~~~~sql 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Carlos Nobrega",
  400000,
  "1949-04-18", 
  "male"
);
~~~~

#### e)
O erro aconteceu por que o campo birth_date é do tipo **DATE** e valores do tipo **DATE** tem que ser passados entre aspas.

~~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
~~~~

#### f)
Criei mais um ator

~~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
~~~~

## Exercicio 3

#### a) 
~~~~sql
SELECT * FROM Actor WHERE gender = 'female'
~~~~

#### b) 
~~~~sql
SELECT salary FROM Actor WHERE name = 'Tony Ramos'
~~~~

#### c) 
Não veio nenhum resultado nessa seleção pois nenhum dos atores selecionados possui um valor inválido na coluna **gender**

~~~~sql
SELECT * FROM Actor WHERE gender = 'invalid'
~~~~

#### d) 
~~~~sql
SELECT id, name, salary FROM Actor WHERE salary <= 500000
~~~~

#### e) 
O erro aconteceu por quê uma das colunas estava com o nome errado em vez de **name** estava escrito **nome**

~~~~sql
SELECT id, name from Actor WHERE id = "002"
~~~~
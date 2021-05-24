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

## Exercicio 4
~~~~sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
~~~~
#### a)
A query do exemplo seleciona todos os atores em que o nome começa com a ou com j e em que o salário é maior que 300000 e mostra todas as suas colunas.

#### b)
~~~~sql
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
~~~~

#### c)
~~~~sql
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%" AND salary > 350000
~~~~

#### D)
~~~~sql
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND (salary >= 350000 AND SALARY <= 900000)
~~~~

## Exercicio 5

#### a)
Essa query cria uma tabela com o nome movies, e que contem uma primary key do tipo varchar, e colunas que não podem aceitar valores nulos como o **name(varchar)**, **synopsis(text)**, **launch_date(date)** e o **rating(float)**

~~~~sql
CREATE TABLE Movies (
	 id VARCHAR(255) PRIMARY KEY, 
     name VARCHAR(255) NOT NULL, 
     synopsis TEXT NOT NULL , 
     launch_date DATE NOT NULL,
     rating FLOAT NOT NULL 
);
~~~~

#### b)
~~~~sql
INSERT INTO Movies (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
)
~~~~

#### c)
~~~~sql
INSERT INTO Movies (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
)
~~~~

#### d)
~~~~sql
INSERT INTO Movies (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
)
~~~~

#### e)
~~~~sql
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
)
~~~~

## Exercicio 6

#### a)
~~~~sql
SELECT id, title, rating FROM Movies
WHERE id="001"
~~~~~

#### b)
~~~~sql
SELECT * FROM Movies
WHERE title="Se Eu Fosse Você"
~~~~~

#### c)
~~~~sql
SELECT id, title, synopsis FROM Movies
WHERE rating >= 7
~~~~~

## Exercicio 7
#### a)
~~~~sql
SELECT * FROM Movies
WHERE title LIKE "%vida%"
~~~~~

#### b)
~~~~sql
SELECT * FROM Movies
WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%"
~~~~~

#### c)
~~~~sql
SELECT * FROM Movies
WHERE release_date < CURDATE()
~~~~~

#### d)
~~~~sql
SELECT 
    *
FROM
    Movies
WHERE
    release_date < CURDATE()
        AND (title LIKE '%vida%'
        OR synopsis LIKE '%vida%')
        AND rating >= 7
~~~~~


# Exercicios | Aula 48 - Relações em SQL

## Exercicio 1

#### a)
Uma chave estrangeira ou foreigner key, é uma coluna que referencia a chave primária de outra tabela, mantendo ela como referencia para realizar operações como join posteriormente.

#### b)
~~~~sql
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES('002', 'Não gostei do filme', 3, '003')
~~~~

#### c)
Ocorre um erro por que quando adicionamos a **CONSTRAINT** do tipo **FOREIGN KEY** em ratings, ela verifica se **FOREIGN KEY** **movie_ id** existe na outra tabela.

#### d)
~~~~sql
ALTER TABLE Movies
DROP COLUMN rating
~~~~

#### e)
A **linha** ou **row** que é referenciada por uma **foreign key**, pois será necessário **apagar** primeiro as **referências** para depois deletar a **linha** desejada.

## Exercicio 2

#### a)
Essa tabela é uma tabela de junção ou tabela associativa, ela é uma tabela responsável por fazer a relação N:M e ela possui 2 foreigner keys uma para tabela movies e outra para tabela actors.

#### b)
~~~~sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003","005")
~~~~

#### c)
Acontece um erro pois o ator ou filme não existe, pois as foreigner keys dentro da tabela MovieCast não permitem adicionar id's que não existam nas respectivas tabelas.

#### d)
Acontece um erro pois não é possivel remover registros da tabela que estão sendo referenciados por outra, primeiro é necessário remover as referências que estão feitas a tabela que será excluida.

## Exercicio 3

#### a)
A query em questão junta todos os registros da tabela Movies que tiverem um registro de Rating associado a elas com seus respectivos id's, aos dados da tabela Ratings, e seleciona todas as colunas das duas tabelas.

#### b)
~~~~sql
SELECT title, movie_id, rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;
~~~~

## Exercicio 4

#### a)
~~~~sql
SELECT title, movie_id, rate, comment FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id;
~~~~

#### b)
~~~~sql
SELECT title, movie_id, actor_id FROM Movies
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id;
~~~~

#### c)
~~~~sql
SELECT title, AVG(rate) as média FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY title;
~~~~

## Exercicio 5

#### a)
São feitas duas joins por que estamos pegando informaçoes de uma tabela que é M:N ou seja para conseguirmos pegar as informaçoes das duas tabelas sem causar nenhum conflito precisamos de uma tabela intermediária em que faremos a operação de JOIN com cada tabela que iremos querer.

#### b)
~~~~sql
SELECT m.id, m.title, a.id, a.name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
~~~~

#### c)
O erro retornado foi de estarmos selecionando uma coluna inexistente, e isso foi causado por estar escrito "m,title" em vez de "m.title", causando esse erro.

#### d)
~~~~sql
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name, r.rate, r.comment FROM Movies m
JOIN Rating r ON r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
~~~~

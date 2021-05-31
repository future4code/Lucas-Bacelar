# Exercicios | Aula 46 - Aprofundamento SQL

## Exercicio 1

#### a)
Esse comando apaga a coluna **salary** da tabela **Actor**
```sql
ALTER TABLE Actor DROP COLUMN salary;
```

#### b)
Esse comando dentro da tabela **Actor** muda o nome da coluna **gender** para **sex** e o seu tipo para **VARCHAR(6)**
```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

#### c)
Esse comando muda o tipo da coluna **gender** dentro da tabela **Actor** para **Varchar(255)**
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

#### d)
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## Exercicio 2

#### a)
```sql
UPDATE Actor 
SET 
    name = 'Fernanda Montenegro',
    birth_date = '1929-10-19'
WHERE
    id = '003'
```

#### b)
```sql
UPDATE Actor 
SET 
    name = UPPER(name)
WHERE
    name = 'Juliana Paes'
```

#### c)
```sql
UPDATE Actor 
SET 
    name = LOWER(name),
    salary = 719300,
    birth_date = '1979-03-26',
    gender = 'female'
WHERE
    id = '005'
```

#### d)
O resultado foi que nenhuma **row** foi afetada, esse resultado acontece quando a coluna a ser atualizada não existe, o comportamento padrão do SQL é que mesmo se a **row** não existir, a operação de **UPDATE** vai retornar sem nenhum erro
```sql
UPDATE Actor 
SET 
    name = 'Julinho',
    salary = 513300,
    birth_date = '1989-13-22',
    gender = 'male'
WHERE
    id = '008'
```

## Exercicio 3

#### a)
```sql
DELETE FROM Actor 
WHERE
    name = 'Fernanda Montenegro'
```

#### b)
```sql
DELETE FROM Actor 
WHERE
    gender = 'male' AND salary > 1000000
```

## Exercicio 4

#### a)
```sql
SELECT 
    MAX(salary) AS MaiorSalario
FROM
    Actor
```

#### b)
```sql
SELECT 
    MIN(salary) AS MenorSalario
FROM
    Actor
WHERE
    gender = 'female'
```

#### c)
```sql
SELECT 
    COUNT(*) AS QuantidadeAtrizes
FROM
    Actor
WHERE
    gender = 'female'
```

#### d)
```sql
SELECT 
    SUM(salary) AS SomaDeSalarios
FROM
    Actor
```

## Exercicio 5

#### a)
A query usa a função de count para contar todas as **rows** da tabela **Actor** e também seleciona a coluna **gender**, e no final usa o **GROUṔ BY** para agrupar a contagem por **gender**
```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

#### b)
```sql
SELECT id, name
FROM Actor
ORDER BY name DESC
```

#### c)
```sql
SELECT *
FROM Actor
ORDER BY salary DESC
```

#### d)
```sql
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3
```

#### e)
```sql
SELECT AVG(salary) AS média_salárial, gender
FROM Actor
GROUP BY gender
ORDER BY média_salárial DESC
```

## Exercicio 6

#### a)
```sql
ALTER TABLE Movies ADD playing_limit_date DATE
```

#### b)
```sql
ALTER TABLE Movies CHANGE rating rating FLOAT
```

#### c)
```sql
UPDATE Movies
SET playing_limit_date = '2020/09/20'
WHERE id = '001';

UPDATE Movies
SET playing_limit_date = '2021/08/20'
WHERE id = '002';

```

#### d)
A operação de **UPDATE** é realizada com sucesso, pórem ela não atualiza nenhuma **row** pois a **row** que ela atualizou não existe mais, então nenhuma **row** é afetada
```sql
DELETE FROM Movies WHERE id = "002"
```

## Exercicio 7

#### a)
```sql
SELECT COUNT(*) AS filmes_em_cartaz
FROM Movies
WHERE rating > 7.5
```

#### b)
```sql
SELECT AVG(rating) AS média_avaliações
FROM Movies
```

#### c)
```sql
SELECT 
    COUNT(title) AS filmes_em_cartaz
FROM
    Movies
WHERE
    playing_limit_date > CURDATE()
```

#### d)
```sql
SELECT 
    COUNT(title) AS filmes_que_irao_lançar
FROM
    Movies
WHERE
    release_date > CURDATE()
```

#### e)
```sql
SELECT 
    MAX(rating) AS maior_avaliação
FROM
    Movies
```

#### f)
```sql
SELECT 
    MIN(rating) AS maior_avaliação
FROM
    Movies
```

## Exercicio 8

#### a)
```sql
SELECT 
    *
FROM
    Movies
ORDER BY title ASC
```

#### b)
```sql
SELECT * FROM Movie ORDER BY title LIMIT 5;
```

#### c)
```sql
SELECT 
    *
FROM
    Movies
WHERE
    playing_limit_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3

#### d)
```sql
SELECT 
    *
FROM
    Movies
ORDER BY rating DESC
LIMIT 3
```


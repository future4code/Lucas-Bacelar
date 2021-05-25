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

## Exercicio 3

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
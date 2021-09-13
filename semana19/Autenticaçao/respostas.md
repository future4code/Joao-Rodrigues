``` 1. ```
``` a) É melhor usar string pois da para fazer um mix de caracteres e com isso um id mais seguro```



``` 2. ```
``` a) Primeira linha é a criaçao de uma const que recebe uma string com o nome da tabela que vai ser ```
``` inserido os dados. Na linha debaixo é a criçao do connection usando a lib knex, que fica responsavel ```
``` pela conexao com o banco de dados. E depois do connetion vem uma funçao que insere no bancoos dados ```
``` vindo da requisiçao. Usa o connection e o UserTable para esta tarefa. ```

``` b) CREATE TABLE IF NOT EXISTS usuarios (``` 
``` id VARCHAR(64) PRIMARY KEY, ``` 
``` name VARCHAR(64) NOT NULL, ```
``` email VARCHAR(64) NOT NULL, ```
``` password VARCHAR(64) NOT NULL ```
``` ); ```



``` 3. ```
``` a) "as string" é uma maneira de exportar e nesse caso ta exportando tudo da lib e nomeando com jwt, pois ```
``` esta lib nao tem export default. ```
``` b) ```

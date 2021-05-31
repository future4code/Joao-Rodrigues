```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {```
  ```// Escreva seu código aqui```
  ```let ocorrencia = arrayDeNumeros.indexOf(numeroEscolhido)```
    ```let quantidadeAparece = 0```

   ```switch (ocorrencia){```
        ```case -1:```
            ```return "Número não encontrado"```
        ```default:```
            ```for (let number of arrayDeNumeros){```
                ```if (number === numeroEscolhido){```
                    ```quantidadeAparece++```
                ```}```
            ```}```
    ```return `O número ${numeroEscolhido} aparece ${quantidadeAparece}x` ```
    ```}```
```}```
```function calculaNota(ex, p1, p2) {```
```     // Escreva seu código aqui```
```     let media```
```     let conceito```
```     media = ((p1*2) + (p2*3) + (ex*1)) / (1+2+3)```
    
```    if(media >= 9){```
```      conceito = 'A'```
```    }else if(media < 9 && media >= 7.5){```
```      conceito = 'B'```
```    }else if(media < 7.5 && media >= 6){```
```      conceito = 'C'```
```    }else{```
```      conceito = 'D'```
```    }```
    
```    return conceito```
```}```

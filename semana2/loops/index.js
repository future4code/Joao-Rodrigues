/* ----- EXERCICIOS DE INTEREPRETAÇAO
1.
Está fazendo um loop com 5 iteraçoes. A cada iteração
a variavel valor recebe ela propria mais o valor da 
variavel indice. E depois desse loop imprime no console
a variavel valor. O valor impresso foi 10 

2.
a)
Sera impresso no console todos os numeros do array que sao 
maiores que 18. Sao eles 19, 21, 23, 25, 27 e o 30

b)
Só com o  for...of não. teria que usar o indexOf tambem. 

3.
****

*/

// ----- EXERCICIOS DE ESCRITA -----//
//1.
let qtdPets = Number(prompt('Quantos bichinhos voce tem?'))
let pets = [] 
if(qtdPets === 0){
    console.log('Que pena! Voce pode adotar um pet!')
}else if(qtdPets > 0){
    for(let i=0; i<qtdPets; i++){
        pets[i] = prompt(`Nome do pet ${i+1}º:`)
    }
}

console.log(pets)

//2.
const arrayOriginal = [1, 2, 3, 8, 5]

//a)
const imprimirValores = ()=>{
    for(let i=0; i<arrayOriginal.length; i++){
        console.log(arrayOriginal[i])
    }
}

imprimirValores()

//b)
const imprimirValoresDivididos = ()=>{
    for(let i=0; i<arrayOriginal.length; i++){
        console.log(arrayOriginal[i]/10)
    }
}

imprimirValoresDivididos()

//c)
const imprimirValoresPares = ()=>{
    let novoArray = []
    for(let i=0; i<arrayOriginal.length; i++){
        if(arrayOriginal[i] % 2 === 0){
            novoArray.push(arrayOriginal[i])
        }
    }

    console.log(novoArray)
}

imprimirValoresPares()

//e)
const maiorMenor = ()=>{
    let maior = arrayOriginal[0]
    let menor = arrayOriginal[0]
    for(let i=0; i<arrayOriginal.length; i++){
        if(i > 0){
            if(maior < arrayOriginal[i]){ //verificar se é maior
                maior = arrayOriginal[i]
            }

            if(menor > arrayOriginal[i]){
                menor = arrayOriginal[i]
            }
        }
    }

    console.log(`Maior: ${maior} Menor: ${menor}`)
}

maiorMenor(arrayOriginal)





/*-----EXERCICIOS DE INTERPRETAÇÃO DE CODIGO-----
1.
a)
10
50

b)Nada.

2.
a)
Essa função deixa o texto em caixa baixa e verifica se há
a string 'cenoura' na frase e retorna true ou false.

b)
true
true
true
*/


//-----EXERCICIOS DE ESCRITA DE CODIGO-----
//1.
//a)
// function minhaInfo(){
//     console.log('Eu sou JP, tenho 28 anos e moro no RJ.')
// }

// minhaInfo()

// //b)
// let nome = prompt('Digite seu nome:')
// let idade = prompt('Digite sua idade:')
// let cidade = prompt('Digite sua cidade:')
// let profissao = prompt('Digite sua profissão:')

// function info(nome, idade, cidade, profissao){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }

// info(nome, idade, cidade, profissao)


//2.
//a)

function somaDeDoisNumeros(n1, n2){
    let soma = n1+n2
    return soma
}

console.log(somaDeDoisNumeros(3, 4))

//b)
function maior(n1, n2){
    let maiorOuMenor = n1 > n2
    return maiorOuMenor
}

console.log(`Primeiro numero é maior? ${maior(4, 5)}`)

//c)
function par(num){
    let numPar = num%2 === 0
    return numPar
}

console.log(`É par? ${par(5)}`)

//d)
let str = prompt('Digite algo:')
function umaString(string){
    console.log(`Tamanho da string: ${string.length}, ${string.toUpperCase()}`)
}

umaString(str)


//3.

let soma = (n1, n2)=>{
    return n1+n2 
}

let diferenca = (n1, n2)=>{
    return n1-n2 
}

let multiplicacao = (n1, n2)=>{
    return n1*n2
}

let divisao = (n1, n2)=>{
    return n1/n2 
}

let num1 = Number(prompt('Digite um numero:'))
let num2 = Number(prompt('Digite outro numero:'))

console.log(`Soma: ${soma(num1, num2)}`)
console.log(`Diferença: ${diferenca(num1, num2)}`)
console.log(`Multiplicação: ${multiplicacao(num1, num2)}`)
console.log(`Divisão: ${divisao(num1, num2)}`)
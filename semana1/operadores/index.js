/*EXERCICIOS DE INTERPRETAÇÃO DE TEXTO\
1.
a. false
b. false
c. false
d. boolean

2.
Sera impresso a concatenaçao das duas veriaveis. O prompt só pega string.
No codigo, para que some, teria que usar o number para converter a string 
em numero.

3.
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/


//EXERCICIOS DE ESCRITA DE CODIGO
//1.
let suaIdade = Number(prompt('Qual e a sua idade?'))
let idadeMelhorAmigo = Number(prompt('Qual e a idade de seu/sua mlhor amigo(a)?'))

if(suaIdade > idadeMelhorAmigo){
    console.log('Sua idade é maior do que a do seu melhor amigo?', true)
}else{
    console.log('Sua idade é maior do que a do seu melhor amigo?', false)
}

console.log(suaIdade-idadeMelhorAmigo)


//2.
let numPar = Number(prompt('Insira um número par'))

console.log(numPar % 2)
//resultado vai sempre dar zero
//se o usuario digitar um numro impar, o resulta
//vai ser diferente de zero


//3.
let idade = Number(prompt('Digite sua idade em anos:'))

let idadeMeses = idade*12
console.log('Sua idade em meses: '+idadeMeses)

let idadeDias = idade * 365
console.log('Sua idade em dias: '+idadeDias)

let idadeHoras = idadeDias * 24
console.log('Sua idade em horas: '+idadeHoras)


//4.
let num1 = Number(prompt('Digite um numero: '))
let num2 = Number(prompt('Digite outro numero: '))

if(num1 > num2){
    console.log('O primeiro numero é maior que o segundo?', true)
}else if(num1 != num2){
    console.log('O primeiro numero é igual ao segundo?', false)
}


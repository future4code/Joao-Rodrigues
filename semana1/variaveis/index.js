/*Exercicios de interpretação de codigo
1.
10
10, 5

2.
10, 10, 10

3.
horasTrabalhadasPorDia
valorTrabalhadoPorDia
*/


//Exercicios de escrita de codigo
//1.
//a)
let nome

//b)
let idade

//c)
console.log(typeof nome, typeof idade)

//d)
//Foi impresso undefined, porque não foi atribuido valor algum as variaveis.

//e)
nome = prompt('Digite seu nome:')
idade = Number(prompt('Digite sua idade'))

//f)
console.log(typeof nome, typeof idade)
//tipo de nome é string e o de idade é number

//g)
alert('Olá '+nome+', voce tem '+idade+' anos')



//2.
const perguntaUm = 'Voce é maior de idade?'
const perguntaDois = 'Voce tem pet(s)?'
const perguntaTres = 'Voce tem CNH?'

//a)
let respostaUm = prompt(perguntaUm)
let respostaDois = prompt(perguntaDois)
let respostaTres = prompt(perguntaTres)

//b)
console.log(perguntaUm+" "+respostaUm)
console.log(perguntaDois+" "+respostaDois)
console.log(perguntaTres+" "+respostaTres)



//3
let a = 10
let b = 25
let c 

c = a
a = b
b = c

console.log(a, b)


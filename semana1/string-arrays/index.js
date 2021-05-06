/*-----EXERCICIOS DE ITERPRETAÇÃO DE CODIGO-----
1)
a. undefined
b. null 
c. 11
d. 3
e. array(11)
f. 8

2.
SUBI NUM ÔNIBUS EM MIRROCOS
27
*/


//-----EXERCICIOS DE ESCRITA DE CODIGO-----
// 1)
const userName = prompt('Seu nome de usuario: ')
const userEmail = prompt('Seu email de usuario: ')
console.log(`O email ${userEmail} foi cadastrado com sucesso! Seja bem-vindo(a), ${userName}!`)

//2)
let favoriteFood = ['pizza', 'lasanha', 'churrasco', 'costela', 'hotdog']
//a.
console.log(favoriteFood)

//b.
console.log(`Essas são as minhas comidas preferidas: 
${favoriteFood[0]}
${favoriteFood[1]}
${favoriteFood[2]}
${favoriteFood[3]}
${favoriteFood[4]}`)

//c.
let userFavoriteFood = prompt('Qual é sua comida favorita?')
favoriteFood[1] = userFavoriteFood
console.log(favoriteFood)

//3)
//a.
let listaDeTarefas = []

//b.
listaDeTarefas [0] = prompt('Digite uma tarefa que precisa realizar:')
listaDeTarefas [1] = prompt('Digite uma segunda tarefa que precisa realizar:')
listaDeTarefas [2] = prompt('Digite uma terceira tarefa que precisa realizar:')

//c.
console.log(listaDeTarefas)

//d.
let i = prompt('Digite de 0 a 2 para a tarefa que ja foi realizada:')

//e.
listaDeTarefas.splice(i, 1)

//f.
console.log(listaDeTarefas)

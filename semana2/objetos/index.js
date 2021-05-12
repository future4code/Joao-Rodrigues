/*----- EXERCICIOS DE INTERPRETAÇÃO DE CODIGO -----
1.
a)
Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horario:"14h"

2.
a)
Juca
Juba
Jubo

b)
copia o objeto que vem depois dos tres pontos para o novo
objeto que esta sendo criado.

3.
a)
False
Undefined

b)
O primeiro valor(false) é referente a propriedade backender.
Como na criação do objeto ele recebeu false, então foi
imprimido false. E o segundo, retornou esse valor(udefined), 
pois como não existia essa propriedade, entao foi criada sem 
receber um valor.
*/



//----- EXERCICIOS DE ESCRITA DE CODIGO -----//
//1.
//a)
const pessoa = {
    nome: 'João Pedro',
    apelido: ['Pepeu', 'JP', 'Bocitos']
}

function nomeApelidos(objPessoa){
    console.log(`Eu sou ${objPessoa.nome}, mas pode me chamar de: ${objPessoa.apelido[0]}, ${objPessoa.apelido[1]} ou ${objPessoa.apelido[2]}`)
}

nomeApelidos(pessoa)

//b)
const novaPessoa = {
    ...pessoa,
    apelido: ['Amor', 'Lindo', 'Chato']
}

nomeApelidos(novaPessoa)

//2.
//a)
const homem = {
    nome: 'Rodrigo',
    idade: 25,
    profissao: 'Designer'
}

const mulher = {
    nome: 'Leila',
    idade: 27,
    profissao: 'Advogada'
}

//b)
function info(obj){
    const informacoes = [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]
    return informacoes
}

console.log(info(homem))
console.log(info(mulher))

//3.
//a)
let carrinho = []

//b)
const fruta1 = {
    nome: 'morango',
    disponibilidade: true
}

const fruta2 = {
    nome: 'goiaba',
    disponibilidade: true
}

const fruta3 = {
    nome: 'abacaxi',
    disponibilidade: true
}

//c)
function carrinhoSacolao(obj1, obj2, obj3){
    carrinho = [obj1, obj2, obj3]
}

console.log(carrinhoSacolao(fruta1, fruta2, fruta3))


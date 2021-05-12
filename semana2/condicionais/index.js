/* ----- EXERCICIOS DE INTREPREÇÃO -----
1.
a)
O codigo verifica se o numero inputado pelo usuario
é divisivel por dois ou nao. Se for, ele imprime uma
dizendo 'passou no teste', senao for, imprime 
'não passou no teste'.

b)
Numeros divisiveis por 2

c)
Numeros nao divisiveis por 2

2.
a)
O codigo serve para colocar o preco de acordo com a 
fruta inputada pelo usuario.

b)
2.25

c)
5

3.
a)
Está recebendo um valor do prompt e esta convertendo
este valor para number usando o Number

b)
10 - "Esse número passou no teste"
-10 - 


c)
Haverá um erro, pois a variavel mensagem foi criada
dentro do if e o escopo pai nao pode acessar variaveis
do escopo filho.
*/

// ----- EXERCICIOS DE ESCRITA -----//
//1.
let idade = Number(prompt('Digite sua idade:'))

const verificarIdade = (maiorIdade)=>{
    if(maiorIdade >= 18){
        console.log('Voce pode dirigir')
    }else{
        console.log('Voce nao pode dirigir')
    }
}

verificarIdade(idade)

//2.
let turno = prompt('Qual seu turno? M = matutino - V = vespertino - N = noturno').toUpperCase()

const mensagem = (turno)=>{
    if(turno === 'M'){
        console.log('Bom dia')
    }else if(turno === 'V'){
        console.log('Boa tarde')
    }else if(turno === 'N'){
        console.log('Boa noite')
    }else{
        console.log('Turno desconhecido')
    }
}
mensagem(turno)

//3.
const mensagem2 = (turno)=>{
    switch (turno) {
        case 'M':
            console.log('Bom dia')
            break
        case 'V':
            console.log('Boa tarde')
            break
        case 'N':
            console.log('Boa noite')
            break
        default:
            console.log('Turno desconhecido')
            break
    }
}
mensagem2(turno)

//4.

let generoFilme = prompt('Genero do filme:').toLocaleLowerCase()
let preco = Number(prompt('Preço do filme:'))

const vaiOuNaoVai = (generoFilme, preco)=>{
    if(generoFilme === 'fantasia' && preco < 15){
        console.log('Bom Filme!')
    }else{
        console.log('Escolha outro genero :(')
    }
}

vaiOuNaoVai(generoFilme, preco)






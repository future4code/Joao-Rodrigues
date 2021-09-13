//a)
// let minhaString: string = 'string'

// minhaString = 2

//Da erro, pois não pode atribuir um number numa variavel de tipo string


//b)
// let meuNumero: number | string = 10

// meuNumero = 'dez'


//c)
enum CORES {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES
}

const minhaPessoa: pessoa = {
    nome: 'João Pedro',
    idade: 28,
    corFavorita: CORES.AZUL 
}



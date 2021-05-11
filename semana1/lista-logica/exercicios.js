// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   let altura = Number(prompt('Altura:'))
   let largura = Number(prompt('Largura:'))
   console.log(altura*largura)
}

//Exercício 2

function imprimeIdade() {
   let anoAtual = Number(prompt('Ano atual:'))
   let anoNasc = Number(prompt('Ano de nasc.:'))

   console.log(anoAtual-anoNasc)
}

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   return peso / (altura*altura)
}

//Exercício 4

function imprimeInformacoesUsuario() {
   let nome = prompt('Nome:')
   let idade = prompt('Idade:')
   let email = prompt('Email:')

   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   let coresFavoritas = []
   coresFavoritas[0] = prompt('Uma cor favorita:') 
   coresFavoritas[1] = prompt('Uma segunda cor favorita:') 
   coresFavoritas[2] = prompt('Uma terceira cor favorita:')
   
   console.log(coresFavoritas)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   return custo / valorIngresso
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   return array[0]
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   return array[array.length-1]
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   let aux = array[0]
   array[0] = array[array.length-1]
   array[array.length-1] = aux

   return array
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
   return string1.toLowerCase() ===  string2.toLowerCase()
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
   const anoAtual = Number(prompt("Qual o ano atual?"))
   const anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"))
   const anoIdentidade = Number(prompt("Qual ano a sua carteira de indentidade foi emitida?"))

   const idade = (anoAtual - anoDeNascimento)
   const tempoIdentidade = anoAtual - anoIdentidade
   const verificaRenovacao = (((idade <= 20) && (tempoIdentidade >= 5 ) ) || ((idade > 20 && idade <= 50) && (tempoIdentidade >= 10) ) || ((idade > 50 ) && (tempoIdentidade >= 15)) )

   console.log(verificaRenovacao)
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
   let multiploQuatrocentos = ano % 400 == 0
   let multiploQuatro = ano % 4 == 0 && ano % 100 != 0

   return multiploQuatrocentos || multiploQuatro
}

checaAnoBissexto(2000)
// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
   let maiorIdade = prompt('Você tem mais de 18 anos?')
   let ensinoMedio = prompt('Você possui ensino médio completo?')
   let disponib = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

   console.log(maiorIdade.toLowerCase() === 'sim' && ensinoMedio.toLowerCase() === 'sim' && disponib.toLowerCase() === 'sim')

}
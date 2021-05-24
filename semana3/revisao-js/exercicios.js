//Exercício 1
function inverteArray(array) {
   // implemente sua lógica aqui
   let novoArray = array.slice(0).reverse()
   return novoArray
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   const novoArray = array.filter((num)=>{
      return num%2 === 0
   }).map((num)=>{
      return num*num
   })

   return novoArray
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   const novoArray = array.filter((num)=>{
      return num%2 === 0
   })

   return novoArray
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maior = 0
   for(let i=0; i<array.length; i++){
      if(maior < array[i]){
         maior = array[i]
      }
   }

   return maior
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   console.log('Não entendi')
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let arrayPares = []
   for(let i=0; i<n; i++){
      arrayPares = i*2
   }

   return arrayPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
   // implemente sua lógica aqui
   if(a === b &&  b === c){
      return 'Equilátero'
   }else if(a === b || a === c || b === c){
      return 'Isósceles'
   }else{
      return 'Escaleno'
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   const objeto = {}
   let maior 
   let menor
   if(num1 > num2){
      objeto.maiorNumero = num1
      maior = num1
      menor = num2
   }else if(num1 < num2){
      objeto.maiorNumero = num2
      maior = num2
      menor = num1
   }

   objeto.maiordivisivelPorMenor = objeto.maiorNumero%2 === 0

   objeto.diferenca = maior-menor

   return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui

}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   var swapp;
   var n = array.length-1;
   var x=array;
   do{
        swapp = false;
        for(var i=0; i < n; i++){
            if (x[i] > x[i+1]){
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
   }while (swapp);
   return x;
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   let filmeFavorito = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep','Anne Hathaway','Emily Blunt','Stanley Tucci']
   }

   return filmeFavorito
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   let filmeFavorito = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep','Anne Hathaway','Emily Blunt','Stanley Tucci']
   }

   return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e 
   estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]} e ${filmeFavorito.atores[3]}`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   const retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2*(lado1 + lado2),
      area: lado1*lado2
   }

   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui

   novaPessoa = {
      ...pessoa,
      nome:'ANÔNIMO'
   }

   return novaPessoa
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

const maiorDeIdade = ()=>{
   const arrayDePessoasAdultos = arrayDePessoas.filter((pessoa)=>{
      return pessoa.idade >= 20
   })

   return arrayDePessoasAdultos
}

const menorDeIdade = ()=>{
   const arrayDePessoasMenores = arrayDePessoas.filter((pessoa)=>{
      return pessoa.idade < 20
   })

   return arrayDePessoasMenores
}

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}
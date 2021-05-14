/**
* EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
* 
* 
   const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
   console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
* 
* 
* 
*/

//usuario
let p1 = []

//computador
let cpu = []

//deck
const cartas = [
   {carta:'A', naipe:'♠', valor: 11},
   {carta:'2', naipe:'♠', valor: 2},
   {carta:'3', naipe:'♠', valor: 3},
   {carta:'4', naipe:'♠', valor: 4},
   {carta:'5', naipe:'♠', valor: 5},
   {carta:'6', naipe:'♠', valor: 6},
   {carta:'7', naipe:'♠', valor: 7},
   {carta:'8', naipe:'♠', valor: 8},
   {carta:'9', naipe:'♠', valor: 9},
   {carta:'10', naipe:'♠', valor: 10},
   {carta:'Q', naipe:'♠', valor: 10},
   {carta:'J', naipe:'♠', valor: 10},
   {carta:'K', naipe:'♠', valor: 10},

   {carta:'A', naipe:'♣', valor: 11},
   {carta:'2', naipe:'♣', valor: 2},
   {carta:'3', naipe:'♣', valor: 3},
   {carta:'4', naipe:'♣', valor: 4},
   {carta:'5', naipe:'♣', valor: 5},
   {carta:'6', naipe:'♣', valor: 6},
   {carta:'7', naipe:'♣', valor: 7},
   {carta:'8', naipe:'♣', valor: 8},
   {carta:'9', naipe:'♣', valor: 9},
   {carta:'10', naipe:'♣', valor: 10},
   {carta:'Q', naipe:'♣', valor: 10},
   {carta:'J', naipe:'♣', valor: 10},
   {carta:'K', naipe:'♣', valor: 10},

   {carta:'A', naipe:'♥', valor: 11},
   {carta:'2', naipe:'♥', valor: 2},
   {carta:'3', naipe:'♥', valor: 3},
   {carta:'4', naipe:'♥', valor: 4},
   {carta:'5', naipe:'♥', valor: 5},
   {carta:'6', naipe:'♥', valor: 6},
   {carta:'7', naipe:'♥', valor: 7},
   {carta:'8', naipe:'♥', valor: 8},
   {carta:'9', naipe:'♥', valor: 9},
   {carta:'10', naipe:'♥', valor: 10},
   {carta:'Q', naipe:'♥', valor: 10},
   {carta:'J', naipe:'♥', valor: 10},
   {carta:'K', naipe:'♥', valor: 10},

   {carta:'A', naipe:'♦', valor: 11},
   {carta:'2', naipe:'♦', valor: 2},
   {carta:'3', naipe:'♦', valor: 3},
   {carta:'4', naipe:'♦', valor: 4},
   {carta:'5', naipe:'♦', valor: 5},
   {carta:'6', naipe:'♦', valor: 6},
   {carta:'7', naipe:'♦', valor: 7},
   {carta:'8', naipe:'♦', valor: 8},
   {carta:'9', naipe:'♦', valor: 9},
   {carta:'10', naipe:'♦', valor: 10},
   {carta:'Q', naipe:'♦', valor: 10},
   {carta:'J', naipe:'♦', valor: 10},
   {carta:'K', naipe:'♦', valor: 10}
  
]

//função que compra 2 cartas para usuario e 2 para o computador
const comprar = ()=>{
   if(p1.length>0 && cpu.length>0){
      p1.splice(0, p1.length)
      cpu.splice(0, cpu.length)
   }
   
   for(let i=0; i<2; i++){
      p1.push(cartas[Math.floor(Math.random()*cartas.length)])
      cpu.push(cartas[Math.floor(Math.random()*cartas.length)])
   }
}

//função que mostra as cartas e a pontuação
const mostrarCartas = ()=>{
   console.log(`Usuario - cartas: ${p1[0].carta}${p1[0].naipe} ${p1[1].carta}${p1[1].naipe} - Pontuação ${p1[0].valor+p1[1].valor}`)
   console.log(`Computador - cartas: ${cpu[0].carta}${cpu[0].naipe} ${cpu[1].carta}${cpu[1].naipe} - Pontuação ${cpu[0].valor+cpu[1].valor}`)
}

//função que mostra o resultado
const resultado = ()=>{
   if(p1[0].valor+p1[1].valor > cpu[0].valor+cpu[1].valor){
      console.log('O usuario ganhou!')
   }else if(p1[0].valor+p1[1].valor < cpu[0].valor+cpu[1].valor){
      console.log('O computador ganhou!')
   }else{
      console.log('Empate!')
   }
}


//------- jogo -------//
const blackjack = ()=>{
   console.log('Bem vindo ao jogo de Blackjack! ')
   do{
      console.clear()
      comprar()
      mostrarCartas()
      resultado()
   }
   while(confirm('Quer iniciar uma nova rodada?'))
   console.log('O jogo acabou!')
}
//--------------------//

//chamada do jogo
blackjack()






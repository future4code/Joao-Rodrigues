/*-----EXERCICIOS DE INTERPRETAÇAO-----
1.
a)
{nome: "Amanda Rangel", apelido: "Mandi"} 0 [{ nome: "Amanda Rangel", apelido: "Mandi" },{ nome: "Laís Petra", apelido: "Laura" },{ nome: "Letícia Chijo", apelido: "Chijo" }]
{nome: "Laís Petra", apelido: "Laura"} 1 [{ nome: "Amanda Rangel", apelido: "Mandi" },{ nome: "Laís Petra", apelido: "Laura" },{ nome: "Letícia Chijo", apelido: "Chijo" }]
{nome: "Letícia Chijo", apelido: "Chijo"} 2 [{ nome: "Amanda Rangel", apelido: "Mandi" },{ nome: "Laís Petra", apelido: "Laura" },{ nome: "Letícia Chijo", apelido: "Chijo" }]

2.
a)
nome: "Amanda Rangel"
nome: "Laís Petra"
nome: "Letícia Chijo"

3.
a)
{nome: "Amanda Rangel", apelido: "Mandi"}
{nome: "Laís Petra", apelido: "Laura"}
*/


//-----EXERCICIOS DE ESCRITA-----
//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

//a)
const nomePets = pets.map((pet)=>{
    return pet.nome
})

console.log(nomePets)

//b)
const cachorrosSalsicha = pets.filter((pet)=>{
    return pet.raca === 'Salsicha'
})

console.log(cachorrosSalsicha)

//c)
const descontoPets = pets.map((pet)=>{
    if(pet.raca === 'Poodle'){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`)
    }
})

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
const nomeProdutos = produtos.map((produto)=>{
    return produto.nome
})

console.log(nomeProdutos)

//b)
const produtosDesconto = produtos.map((produto)=>{
    console.log(`${produto.nome} | ${produto.preco*0.95} preço com 5% de desconto`)
})

//c)
const produtosBebidas = produtos.filter((produto)=>{
    return produto.categoria === 'Bebidas'
})

console.log(produtosBebidas)

//d)
const produtosYpe = produtos.filter((produto)=>{
    return produto.nome.includes('Ypê')
})

console.log(produtosYpe)

//e)

const compreProdutos = produtos.filter((produto)=>{
    return produto.nome.includes('Ypê')
}).map((produto)=>{
    console.log(`Compre ${produto.nome} por ${produto.preco}`)
})

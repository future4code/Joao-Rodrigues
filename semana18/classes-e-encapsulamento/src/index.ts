import { Transaction } from './entities/Transactions';
import { UserAccount } from './entities/UserAcconut';
import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

//1.
//a) Construtor serve para inicializar os atributos e metodos
//no momento da criaçao de um objeto. ex.:
//constructor()

//b)Foi empressa apenas 1 vez
const user1: UserAccount = new UserAccount('Pedro', '143.455.391-23', 25)

//c)Usando os metodos get e set


//2
const transaction1: Transaction = new Transaction('Pix', 100, '30/08/2021')
user1.setTransactions(transaction1)
console.log(user1.getTransactions())


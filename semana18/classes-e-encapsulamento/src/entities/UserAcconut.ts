import { Transaction } from "./Transactions";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getCpf(){
        return this.cpf
    }

    setCpf(cpf: string){
        this.cpf = cpf
    }

    getName(){
        return this.name
    }

    setName(name: string){
        this.name = name
    }

    getAge(){
        return this.age
    }

    setAge(age: number){
        this.age = age
    }

    getBalance(){
        return this.balance
    }

    setBalance(balance: number){
        this.balance = balance
    }

    getTransactions(){
        return this.transactions
    }

    setTransactions(transaction: Transaction){
        this.transactions.push(transaction)
    }
  
}
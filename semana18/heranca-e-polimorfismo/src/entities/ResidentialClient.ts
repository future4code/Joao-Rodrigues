import { Client } from '../interfaces/Client';
import { Residence } from "./Residence";

export class ResidentialClient extends Residence implements Client{
    private cpf: string
    name: string = 'Luan'
    registrationNumber: number = 2
    consumedEnergy: number = 150

    constructor(cep: string, residenceQuantity: number, cpf: string){
        super(residenceQuantity, cep)
        this.cpf = cpf
    }

    getCpf(): string{
        return this.cpf
    }

    calculateBill(): number{
        return this.consumedEnergy*0.75
    }
}
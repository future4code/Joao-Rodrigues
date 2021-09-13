import { Client } from '../interfaces/Client';
import { Commerce } from "./Commerce";

export class ComercialClient extends Commerce implements Client{
    private cnpj: string
    name: string = 'Vitor'
    registrationNumber: number = 4
    consumedEnergy: number = 250

    constructor(cep: string, floorsQuantity: number, cnpj: string){
        super(floorsQuantity, cep)
        this.cnpj = cnpj
    }

    getCnpj(): string{
        return this.cnpj
    }

    calculateBill(): number{
        return this.consumedEnergy*0.53
    }
}
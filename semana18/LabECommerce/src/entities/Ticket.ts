import { Product } from './Product';

export class Ticket extends Product{
    originPlace: string
    destinationPlace: string

    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        originPlace: string,
        destinationPlace: string
    ){
        super(id, name, description, price)
        this.originPlace = originPlace
        this.destinationPlace = destinationPlace
    }
}
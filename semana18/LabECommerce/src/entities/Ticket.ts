import { Product } from './Product';

export class Ticket extends Product{
    local_origin?: string
    local_destination?: string

    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        originPlace: string | undefined,
        destinationPlace: string | undefined
    ){
        super(id, name, description, price)
        this.local_origin = originPlace
        this.local_destination = destinationPlace
    }
}
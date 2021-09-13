export class Purchase{
    id: string
    quantity: number = 1
    totalValue: number
    idUser: string
    idProduct: string

    constructor(
        id: string,
        quantity: number,
        totalValue: number,
        idUser: string,
        idProduct: string,
    ){
        this.id = id
        this.quantity = quantity
        this.totalValue = totalValue
        this.idUser = idUser
        this.idProduct = idProduct
    }
}
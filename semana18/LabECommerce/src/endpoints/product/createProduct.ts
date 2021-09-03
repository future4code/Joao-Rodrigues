import { Ticket } from './../../entities/Ticket';
import { ProductDatabase } from './../../database/ProductDatabase';
import { Product } from './../../entities/Product';
import { Response, Request } from 'express';

const createProduct = async(req: Request, res: Response):Promise<void> =>{
    let statusCode = 400
    
    try {
        const {name, description, price, local_origin, local_destination} = req.body
        const id: string = Date.now() + Math.random().toString()
        
        if(!name || !description || !price){
            statusCode = 406
            throw new Error("Campos invalidos");            
        }

        const newProduct = new Product(id, name, description, price)
        const newTicket = new Ticket(id, name, description, price, local_origin, local_destination)

        const newProductDatabase = new ProductDatabase()

        if(!local_origin && !local_destination){
            newProductDatabase.create(newProduct)
        }else{
            newProductDatabase.create(newTicket)
        }
        
        res.status(201).send('Criado com sucesso!')
        
    } catch (error) {
        res.status(statusCode).send('Error')
    }
}

export default createProduct
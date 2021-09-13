import { Ticket } from './../../entities/Ticket';
import { ProductDatabase } from './../../database/ProductDatabase';
import { Request, Response } from 'express';

const getAllProducts = async(req: Request, res: Response):Promise<void> =>{
    const statuscode = 400
    try {
        const newProductDatabase = new ProductDatabase()
        const productDb = await newProductDatabase.getAll()

        const products = productDb.map((product)=>{
            return new Ticket(
                product.id,
                product.name,
                product.description,
                product.price,
                product.local_origin,
                product.local_destination
            ) 

        })

        res.send(products)

    } catch (error) {
        res.status(statuscode).send(error)
    }
}

export default getAllProducts
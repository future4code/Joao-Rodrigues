import { Product } from './../../entities/Product';
import { Response, Request } from 'express';

const createProduct = async(req: Request, res: Response):Promise<void> =>{
    let statusCode = 400
    
    try {
        const {name, description, price, local_origin, local_destination} = req.body
        const id: string = Date.now() + Math.random().toString()
        
        if(!name || !description || !price || !local_origin || !local_destination){
            statusCode = 406
            throw new Error("Campos invalidos");            
        }else if(!name || !description || !price){
            statusCode = 406
            throw new Error("");
        }

        if(local_origin && local_destination){
            
        }
        
        const newProduct = new Product(id, name, description, price, local_origin, local_destination)
        
    } catch (error) {
        
    }
}
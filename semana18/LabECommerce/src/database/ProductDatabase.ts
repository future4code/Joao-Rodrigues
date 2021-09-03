import { Ticket } from './../entities/Ticket';
import { Product } from './../entities/Product';
import { BaseDatabase } from './BaseDatabase';

export class ProductDatabase extends BaseDatabase{
    private TABLE_NAME = 'product'

    async create(product: Product | Ticket){
        await BaseDatabase.connection(this.TABLE_NAME).insert(product)
    }

    async getAll(){
        return BaseDatabase.connection(this.TABLE_NAME).select()
    }
}
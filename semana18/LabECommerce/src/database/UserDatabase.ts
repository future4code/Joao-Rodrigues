import { BaseDatabase } from './BaseDatabase';
import { User } from './../entities/User';

export class UserDatabase extends BaseDatabase{
    private TABLE_NAME = "user"

    async create(user: User){
        await BaseDatabase.connection(this.TABLE_NAME).insert(user)
    }

    async getAll(){
        return BaseDatabase.connection(this.TABLE_NAME).select()
    }
}
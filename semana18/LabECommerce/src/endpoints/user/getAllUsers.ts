import { User } from './../../entities/User';
import { UserDb} from './../../types';
import { UserDatabase } from './../../database/UserDatabase';
import { Request, Response } from 'express';

const getAllUsers = async(req: Request, res: Response):Promise<void> =>{
    let statusCode = 400    
    try {
        const newUserDatabase = new UserDatabase()
        const usersDb = await newUserDatabase.getAll()
        
        if(!usersDb){
            statusCode = 404
            throw new Error("Nada encontrado!");    
        }

        const users = usersDb.map((user)=>{
            return new User(
                user.id, 
                user.name,
                user.email,
                user.age
            )
        })

        res.status(200).send(users)
    } catch (error) {
        res.status(statusCode).send('Nada Encontrado')
    }
}

export default getAllUsers
import { UserDatabase } from './../../database/UserDatabase';
import { User } from './../../entities/User';
import { Request, Response } from 'express';

const createUser = async(req: Request, res: Response):Promise<void> =>{
    let statusCode = 400
    try {
        const {name, email, age} = req.body
        const id: string = Date.now() + Math.random().toString()
       

        if(!name || !email || !age){
            statusCode = 406
            throw new Error("Campos invalidos");
        }

        const newUser = new User(id, name, email, age)
        const newUserDatabase = new UserDatabase()
        newUserDatabase.create(newUser)

        res.status(201).send('Criado com sucesso')
    } catch (error) {
        res.status(statusCode)
    }
}

export default  createUser
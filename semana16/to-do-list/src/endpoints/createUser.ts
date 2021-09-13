import { Request, Response } from "express";
import insertUser from "../data/insertUser";

const createUser = async(req: Request, res: Response)=>{
    try {
        if(!req.body.name || !req.body.nickname || !req.body.email){
            res.statusCode = 400
            throw new Error("Invalid fields!");
        }

        //consultar(inserir os dados da req no bd) o bd
        const id: string = Date.now() + Math.random().toString()

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        //validar as saidas do banco

        //responder a requisiçao
        res.status(200).send("Usuario criado com sucesso")
        
    } catch (error) {
        res.status(400).send({
           message: error.message || error.sqlMessage
        })
    }
}

export default createUser
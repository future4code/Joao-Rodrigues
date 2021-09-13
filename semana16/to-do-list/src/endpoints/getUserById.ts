import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";

const getUserById = async(req: Request, res: Response) =>{
    try {
        const user = await selectUserById(req.params.id)

        //consultar(inserir os dados da req no bd) o bd
        
        //validar as saidas do banco
        if(!user){
            throw new Error("Usuario nao encontrado");
            
        }

        //responder a requisiçao
        res.status(200).send({
            id: user.id,
            nickname: user.nickname
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}

export default getUserById
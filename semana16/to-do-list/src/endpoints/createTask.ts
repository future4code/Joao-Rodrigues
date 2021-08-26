import { Request, Response } from "express";
import insertTask from "../data/insertTask";

const createTask = async(req: Request, res: Response)=>{
    try {
        if(!req.body.title || !req.body.descripton || !req.body.limitDate || !req.body.author_id){
            throw new Error("Invalid fields");
        }

        const id: string = Date.now() + Math.random().toString()

        await insertTask(
            id,
            req.body.title,
            req.body.description,
            req.body.limitDate, 
            req.body.author_id
        )

        res.status(201).send('Tarefa criada com sucesso!')

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}

export default createTask
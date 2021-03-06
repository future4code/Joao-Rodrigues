import { Request, Response } from "express"
import { createTaskBusiness } from "../../business/tasks/createTaskBusiness"

export const createTaskController = async(
    req: Request,
    res: Response
) => {
    try {
        const { title, description, deadline, authorId } = req.body

        // implementar a lógica, a regra de negócios => chamar o business
        createTaskBusiness({ title, description, deadline, authorId })
        
        res.status(201).end()
    } catch (error) {
        // res.statusMessage = error.message 
        res.status(500).end()
    }
}
import { Request, Response } from "express"
import { BaseDatabase } from "../database/BaseDatabase"
import { CharacterDatabase } from "../database/CharacterDatabase"
import { Character } from "../entities/Character"
import { CustomError } from "../errors/CustomError"

export default async function createCharacter(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, gender, description } = req.body

      if (!name || !gender) {
         // res.status(406)
         // throw new Error("Dados incompletos: request não aceita")
         
         throw new CustomError(406, "Dados incompletos: request não aceita")
      }

      const character = new Character(
         name,
         gender,
         description
      )

      const characterDatabase = new CharacterDatabase()
      await characterDatabase.create(character)

      res.status(201).end()
   } catch (error: any) {
      res.status(error.statusCode || 400)
         .send(error.message || "Erro inesperado")
   }
}

import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         console.log('apssou por aqui 1')
         throw new Error("Preencha os campos 'email' e 'password'")
      }

      if(!email.include('@')){
         res.statusCode = 406
         console.log('apssou por aqui 2')
         throw new Error("Campo de email deve conter '@'");
      }

      if (password.length < 6) {
         res.statusCode = 422
         console.log('apssou por aqui 3')
         throw new Error("Senha deve ter no mínimo 6 caracteres")
      }

      //Busca o usuario pelo email e caso ache, nao permite add o email vindo do body
      const [user] = await connection('usuarios')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      //
      
      const id: string = new IdGenerator().generateId()

      const newUser: user = { id, email, password }

      await connection('usuarios')
         .insert(newUser)

      const token:string = new Authenticator().generateToken({id})

      // Forma alternativa: 
         // const authenticator = new Authenticator()
         // const token:string = authenticator.generateToken({id})

      res.status(201).send({ newUser, token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}
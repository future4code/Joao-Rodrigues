import { config } from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken"
import { authenticationData } from "../types"

config()

export class Authenticator {

   private jwtKey = process.env.JWT_KEY

   public generateToken = (
      payload: authenticationData
   ): string => {
      return sign(
         payload,
         this.jwtKey,
         { expiresIn: "1d" }
      )
   }

   public getTokenData = (
      token: string
   ): authenticationData | null => {

      try {

         const tokenData = verify(token, process.env.JWT_KEY) as authenticationData

         return {
            id: tokenData.id,
            role: tokenData.role
         }

      } catch (error) {
         console.log(error)

         return null
      }
   }
}
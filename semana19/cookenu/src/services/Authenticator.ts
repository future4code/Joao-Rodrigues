import { config } from 'dotenv';
import { sign, verify } from "jsonwebtoken";
config()

export interface AuthenticationData{
    id: string
}

export class Authenticator{
    generate(payload: AuthenticationData):string{
        const token = sign(payload, process.env.JWT_KEY, {
            expiresIn:  process.env.ACCESS_TOKEN_EXPIRES_IN
        })

        return token
    }
     
    getTokenData(token: string): AuthenticationData{
        const data = verify(token, process.env.JWT_KEY)
        return data as AuthenticationData
    }
}
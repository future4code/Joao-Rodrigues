import bcrypt from 'bcryptjs';

export class HashManager {
    hash = (plainText: string) => {
        const rounds = Number(process.env.BCRYPT_COST) //COST
        const salt = bcrypt.genSaltSync(rounds)
        const result = bcrypt.hashSync(plainText, salt)

        return result
    }

    compare = (plainText: string, DataBaseHash: string) => {
        const compareResult = bcrypt.compareSync(plainText, DataBaseHash)

        return compareResult
    } 
}
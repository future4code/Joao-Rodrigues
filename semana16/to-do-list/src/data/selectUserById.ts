import { connection } from './connection';

const selectUserById = async(id: string)=>{
    const result = await connection('users')
    .select('*')
    .where({id})

    return result[0]
}

export default selectUserById
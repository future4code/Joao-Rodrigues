import { connection } from './connection';

const insertTask = async(
    id: string,
    title: string,
    description: string,
    limitDate: Date,
    author_id: string
) =>{
    await connection.insert({
        id,
        title, 
        description,
        limitDate,
        author_id
    }).into("tasks")
}

export default insertTask
import knex from 'knex'

export const connection = knex({
    client:'mysql',
    connection:{
        host: '35.226.146.116',
        user: '2136337-joao-rodrigues',
        password: 'ugS7p4C%DqfCpvXh2IrF',
        database: 'molina-2136337-joao-rodrigues',
        port: 3306,
        multiStatements: true
    }
})
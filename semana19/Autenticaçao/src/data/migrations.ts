import { connection } from "./connection";

connection.raw(`
   CREATE TABLE IF NOT EXISTS usuarios (
      id VARCHAR(64) PRIMARY KEY,
      email VARCHAR(64) NOT NULL,
      password VARCHAR(64) NOT NULL
   );
`).then(() => {
   console.log("Tabelas criadas!");
}).catch(error => {
   console.log(error.sqlMessage || error.message);
}).finally(()=>{
   connection.destroy()
})
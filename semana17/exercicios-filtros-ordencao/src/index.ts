import { connection } from './connection';
import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


// Para testar se o servidor está tratando os endpoints corretamente
app.get("/", async (req: Request, res: Response) => {
  const result = await connection.raw('show tables')
  console.log(result)
  res.send("Hello!")
})

app.get('/atletas', async(req: Request, res: Response)=>{
  try {
    // const result = await connection.raw(`select * from Atletas;`)

    // const atletas = result[0]
    const atletas = await connection('Atletas')

    res.status(200).send(atletas)
  } catch (error) {
    res.status(500).send('Error')
  }
})

app.put('/atletas/:id', async(req: Request, res: Response)=>{
  try {
    await connection('Atletas')
    .update({
      nome: req.body.nome,
      sexo: req.body.sexo,
      esporte: req.body.esporte  
    })
    .where({
      id: req.params.id
    })

    res.end()
  } catch (error) {
    res.status(500).send('Error')
  }
})

app.post('/atletas', async(req: Request, res: Response)=>{
  try {
    await connection.raw(`
      insert into Atletas values
      (default, 
        '${req.body.nome}', 
        '${req.body.sexo}', 
        '${req.body.nascimento}', 
        '${req.body.esporte}'
      );
    `)
    
    res.status(201).send('Created!')
    
  } catch (error) {
    res.status(500).send('Error')
  }
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

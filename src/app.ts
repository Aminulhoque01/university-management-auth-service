import express, { Application,Request, Response } from 'express'
import cors from 'cors';
const app:Application = express()
const port = 3000

app.use(cors());

//perser
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//testing 
app.get('/', (req:Request, res:Response) => {
  res.send('mongoose working successfully')
})


export default app;
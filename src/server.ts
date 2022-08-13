/**************************** IMPORTS ******************************/
import express, { Express } from "express"
import { AddressInfo } from "net";
import cors from "cors"
import { userRouter } from "./routers/userRouter"
import { postRouter } from "./routers/postRouter"
import { amizadeRouter } from "./routers/AmizadeRoute"
import DataAcess from "./data/DataAcess"
import { pacienteRouter } from "./routers/PacienteRoute"


/**************************** CONFIG ******************************/
const app: Express = express()
app.use(express.json())
app.use(cors())
DataAcess.connect()
/**************************** TYPES ******************************/
/**************************** SERVICES ******************************/
/**************************** ENDPOINTS ******************************/
app.use('/user', userRouter)
app.use('/post', postRouter )
app.use('/amizade', amizadeRouter )
app.use('/paciente', pacienteRouter )
/**************************** SERVER INIT ******************************/
const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhos:${address.port}`)
    }else{
        console.log(`Failure upon starting server. `)
    }
})

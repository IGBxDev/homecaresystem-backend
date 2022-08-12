/**************************** IMPORTS ******************************/
import express, { Express } from "express"
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
app.listen(3003, () => {
   console.log("Server running on port 3003")
})

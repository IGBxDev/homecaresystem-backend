import express from 'express'
import cors from 'cors'

import { userRouter } from "./routers/userRouter"
import { postRouter } from "./routers/postRouter"
import { amizadeRouter } from "./routers/AmizadeRoute"
import DataAcess from "./data/DataAcess"
import { professionalRouter } from "./routers/ProfessionalRoute"



/**************************** CONFIG ******************************/
const app = express()
app.use(express.json())
app.use(cors({origin: "*", credentials: true})) //define que qualquer url pode acessar essa api


/**************************** CONNECTION ******************************/

DataAcess.connect()

/**************************** ENDPOINTS ******************************/
app.use('/user', userRouter)
app.use('/post', postRouter )
app.use('/amizade', amizadeRouter )
app.use('/professional', professionalRouter )

export default app
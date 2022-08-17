import express from 'express'
import cors from 'cors'
import DataAcess from "./data/DataAcess"
import { professionalRouter } from "./routers/ProfessionalRoute"
import { patientRouter } from './routers/PatientRoute'
import { healthInsuranceRouter } from './routers/HealthIncuranceRoute'
import { frequencyRouter } from './routers/FrequencyRoute'



/**************************** CONFIG ******************************/
const app = express()
app.use(express.json())
app.use(cors({origin: "*", credentials: true})) //define que qualquer url pode acessar essa api


/**************************** CONNECTION ******************************/
DataAcess.connect()

/**************************** ENDPOINTS ******************************/
app.use('/professional', professionalRouter )
app.use('/patient', patientRouter )
app.use('/healthIncurance', healthInsuranceRouter )
app.use('/frequency', frequencyRouter )

export default app
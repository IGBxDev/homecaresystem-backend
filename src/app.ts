import express from 'express'
import { router } from './routes'
import cors from 'cors'
import 'reflect-metadata'

class App{

    public express: express.Application

    constructor(){
        this.express = express()        
        this.middleware()
        this.routes()
    }

    private middleware (): void{
        this.express.use(express.json())        
        this.express.use(cors())
    }

    private routes (): void{
        this.express.use(router)
    }
}

export default new App().express
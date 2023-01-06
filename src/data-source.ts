import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: "mongodb+srv://homecaresystem:123asyst100@homecaresystem.dh0cd.mongodb.net/cashflow",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    port: 27017
})

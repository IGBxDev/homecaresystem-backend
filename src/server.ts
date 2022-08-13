import { AddressInfo } from 'net'
import app from './app'


const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log("......", process.env.DB_DATABASE)
        console.log(`Server is runing in http://localhost:${address.port}`)
    }else{
     
        console.error(`Ocorreu um erro para iniciar o servidor`)
    }
})
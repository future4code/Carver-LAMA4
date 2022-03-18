import express, { Express } from "express"
import cors from 'cors'
import {AddressInfo} from 'net'
import { signupController } from "./controller/signupController"
import { loginController } from "./controller/loginController"
import { bandRegisterController } from "./controller/bandRegisterController"


const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen (process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running on port http://localhost:${address.port}`)
    }
    else{
        console.log('Failure on startin server')
    }
})

app.post('/user/signup', signupController)
app.post('/user/login', loginController)
app.post('/band/register', bandRegisterController)
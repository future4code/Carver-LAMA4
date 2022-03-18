import { Request, Response } from "express";
import { loginData } from "../data/loginData";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";



export const loginController = async (req: Request, res: Response) : Promise<void> =>{
    try {
        const {email, password} = req.body
        
        if(!email || !password){
            res.statusCode = 404
            throw new Error ("Um ou mais campos não foram preenchidos")
        }

        const [user] = await loginData(email)

        const passwordIsCorrect: boolean = await compareHash(password, user.password)

        if(passwordIsCorrect === false){
            res.statusCode = 401
            throw new Error ("Credenciais inválidas")
        }

        const token = generateToken({id: user.id, userRoles: user.roles})
        res.send({message: "Login realizado com sucesso" ,token})

    } catch (error: any) {
        res.status(400).send({message: error.message || error.sqlMessage || "erro de servidor"})
    }
} 
import { Request, Response } from "express";
import { signupData } from "../data/signupData";
import { generateToken } from "../services/authenticator";
import { generateHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { Roles } from "../types/authenticationInfo";


export const signupController = async (req: Request, res: Response) => {
    try {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role as Roles
        }
        const id = generateId()
        const token = generateToken({id, userRoles: newUser.role})
        const hashPassword = await generateHash(newUser.password)
        await signupData (id , newUser.name, newUser.email, hashPassword, newUser.role)

        if (!newUser.name || !newUser.email || !newUser.password || !newUser.role){
            res.statusCode = 404
            throw new Error ("Um ou mais campos estão faltando")
        }
        else if (newUser.email.indexOf('@') === -1){
            res.statusCode = 400
            throw new Error ('Campo de e-mail invalido')
        }
        else{
            res.status(200).send({token})
            console.log(token)
        }
    } catch (error: any) {
        res.status(500).send({message: error.message || error.sqlMessage || 'Error de servidor'})
    }
}
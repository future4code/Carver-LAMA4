import { Request, Response } from "express";
import { bandRegisterData } from "../data/bandRegisterData";
import { getToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { Roles } from "../types/authenticationInfo";


export const bandRegisterController = async (req: Request, res: Response) => {
    try {

        const authorization = req.headers.Authorization as string
        const token = getToken(authorization)
        const user = token?.userRoles
        const bandInfo = {
            name: req.body.name,
            music_genre: req.body.music_genre,
            responsible: req.body.responsible
        }

        const id = generateId()

        if(user === Roles.NORMAL){
            res.statusCode = 401
            throw new Error ("Usuário não permitido")
        }
        else if (!bandInfo.name || !bandInfo.music_genre || !bandInfo.responsible){
            res.statusCode = 404
            throw new Error ("Um ou mais campos estão em branco")         
        }
        
        await bandRegisterData(id, bandInfo.name, bandInfo.music_genre, bandInfo.responsible)
        res.status(200).send({message: "Banda Cadastrada com sucesso"})

    } catch (error: any) {
        res.status(500).send({message: error.message || error.sqlMessage || "Erro inesperado"})
    }
}
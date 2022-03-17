import { Roles } from "../types/authenticationInfo";
import { connection } from "./dataBase/connection";


export const signupData = async(id: string, name: string, email: string, password: string, role: Roles) =>{
    await connection().insert({id, name, email, password, role}).into('NOME_TABELAS_USUÁRIOS')
}
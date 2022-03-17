import { connection } from "./dataBase/connection";


export const loginData = async(email:string) => {
    const result = await connection('NOME_TABELAS_USUÁRIOS').where({email})

    return result
}
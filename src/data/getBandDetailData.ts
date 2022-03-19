import { connection } from "./dataBase/connection"


export const getBandDetailData = async(id: string) => {
    const result = await connection.raw(`
        SELECT * FROM NOME_TABELA_BANDAS WHERE id = "${id}"; 
    `)
    return result[0]
}
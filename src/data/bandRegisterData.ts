import { connection } from "./dataBase/connection"


export const bandRegisterData = async( id: string, name: string, music_genre: string, responsible: string) => {
    await connection().insert({ id, name, music_genre, responsible}).into('NOME_TABELA_BANDAS')
}
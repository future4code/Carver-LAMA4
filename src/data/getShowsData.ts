import { connection } from "./dataBase/connection";


export const getShowsData = async (week_day: string) => {
    const result = await connection.raw(`SELECT name, music_genre FROM  NOME_TABELA_BANDAS JOIN NOME_TABELA_SHOWS 
    ON NOME_TABELA_SHOWS.band_id = NOME_TABELA_BANDAS.id WHERE NOME_TABELA_SHOWS.week_day = "${week_day}"
     ORDER BY NOME_TABELA_SHOWS.start_time AND NOME_TABELA_SHOWS.end_time ASC;`);
    return result
};
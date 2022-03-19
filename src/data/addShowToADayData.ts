import { connection } from "./dataBase/connection"


export const addShowToADayData = async(id: string, week_day: string, start_time: number, end_time: number, band_id: string) => {
    await connection('NOME_TABELA_SHOWS').insert({
        id,
        week_day,
        start_time,
        end_time,
        band_id
    })
}
import { Request, Response } from "express";
import { addShowToADayData } from "../data/addShowToADayData";
import { generateId } from "../services/idGenerator";


export const addShowtoADayController = async (req: Request, res: Response) =>{
    try {
        const show = {
            week_day: req.body.week_day,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            band_id: req.body.band_id
        }
        const id = generateId()

        await addShowToADayData (id, show.week_day, show.start_time, show.end_time, show.band_id,)

        if(show.start_time<8 || show.end_time>23){
            res.statusCode = 400
            throw new Error ("Horário inválido!")
        }
        else if(show.week_day !== 'sexta' && show.week_day !== 'sábado' && show.week_day !== 'domingo'){
            res.statusCode = 400
            throw new Error ("Somente é possível agendar o show para sexta, sabado ou domingo")
        }
    
            res.status(200).send({message: "Show criado com sucesso"})

        

    } catch (error:any) {
        res.status(500).send({message: error.message || error.sqlMessage})
    }
}
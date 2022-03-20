import { Request, Response } from "express";
import { getShowsData } from "../data/getShowsData";



export const getShowsController = async(req: Request, res: Response) => {
    try {
        const week_day = req.query.week_day as string

        const result = await getShowsData(week_day)
        console.log(week_day)

        if(!week_day){
            res.statusCode = 404
            throw new Error ("Campo dia em branco")
        }
         else if(week_day !== 'sexta' && week_day !== 'sabado' && week_day !== 'domingo'){
            res.statusCode = 401
            throw new Error ("Dia informado inválido")
        }
        else{
            res.status(200).send({result})
        }
        
    } catch (error: any) {
        res.status(500).send({message: error.message || error.sqlMessage})
    }
}
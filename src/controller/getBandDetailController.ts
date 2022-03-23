import { Request, Response } from "express"
import { getBandDetailData } from "../data/getBandDetailData"

export const getBandDetailController = async(req: Request, res: Response) => {
    try {
        const id = req.params.id

        const idResult = await getBandDetailData(id)

        if(id){
            return res.status(200).send({message: idResult})
        }

    } catch (error: any) {
        res.status(500).send({message: error.message || error.sqlMessage})
    }
}


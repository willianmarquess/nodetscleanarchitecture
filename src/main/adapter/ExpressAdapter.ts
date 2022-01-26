import { Request, Response } from "express";
import RequestDTO from "../shared/http/RequestDTO";
import ResponseDTO from "../shared/http/ResponseDTO";

export default class ExpressAdapter{

    constructor(private request: Request, private response: Response){}

    async adapt(controllerFunction: Function){
        const requestDTO = new RequestDTO(this.request.body, this.request.params);
        const responseDTO = await controllerFunction(requestDTO) as ResponseDTO;
        this.response.status(responseDTO.statusCode).json(responseDTO.body);
    }
}


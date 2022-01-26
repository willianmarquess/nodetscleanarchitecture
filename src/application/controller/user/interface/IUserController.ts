import { Request, Response } from "express";
import RequestDTO from "../../../../main/shared/http/RequestDTO";
import ResponseDTO from "../../../../main/shared/http/ResponseDTO";

export interface IUserController{
     create(request: RequestDTO): Promise<ResponseDTO>
     findAll(request: RequestDTO): Promise<ResponseDTO>
     findById(request: RequestDTO): Promise<ResponseDTO>
     update(request: RequestDTO): Promise<ResponseDTO>
}
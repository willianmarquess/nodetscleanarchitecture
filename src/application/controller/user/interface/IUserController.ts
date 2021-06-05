import { Request, Response } from "express";

export interface IUserController{
     create(request: Request, response: Response): Promise<Response>
     findAll(request: Request, response: Response): Promise<Response>
     findById(request: Request, response: Response): Promise<Response>
     update(request: Request, response: Response): Promise<Response>
}
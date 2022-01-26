import { Response } from "express";
import BaseError from "../errors/BaseError";
import InvalidParamsError from "../errors/InvalidParamsError";
import ErrorMessageDTO from "./ErrorMessageDTO";
import ResponseDTO from "./ResponseDTO";

export default abstract class HttpResponse {
    static ok(body: any): ResponseDTO {
        return new ResponseDTO(body, 200);
    }

    static created(body: any): ResponseDTO {
        return new ResponseDTO(body, 201);
    }

    static noContent(): ResponseDTO {
        return new ResponseDTO(null, 204);
    }

    static errorRequest(error: BaseError) {
        if(error instanceof InvalidParamsError)
            return  new ResponseDTO(new ErrorMessageDTO(error.statusCode, error.message, error.errors), error.statusCode)
        return new ResponseDTO(new ErrorMessageDTO(error.statusCode, error.message), error.statusCode || 500);
    }
}
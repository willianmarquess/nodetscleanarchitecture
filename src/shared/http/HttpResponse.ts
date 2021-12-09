import { Response } from "express";
import InvalidParamsError from "../errors/InvalidParamsError";

export default abstract class HttpResponse {
    static ok(res: Response, body: any) {
        return res.status(200).json(body);
    }

    static created(res: Response, body: any) {
        return res.status(201).json(body);
    }

    static noContent(res: Response) {
        return res.status(204);
    }

    static errorRequest(res: Response, error: any) {

        if(error instanceof InvalidParamsError)
            return res.status(error.statusCode).json({statusCode: error.statusCode, 
                message: error.message,
                errors: error.errors});

        return res.status(error.statusCode || 500).json({statusCode: error.statusCode, message: error.message});
    }
}
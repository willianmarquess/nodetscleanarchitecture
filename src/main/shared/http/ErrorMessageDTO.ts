import ValidationError from "../validation/ValidationError";

export default class ErrorMessageDTO{
    constructor(public statusCode: number, public message: string, public errors?: Array<ValidationError> | ValidationError){}
}
import ValidationError from "../validation/ValidationError";
import BaseError from "./BaseError";

export default class InvalidParamsError extends BaseError{
    
  public errors: Array<ValidationError>;

  constructor(errors: Array<ValidationError>) {
    super('Parâmetros inválidos', 'invalidParams', 400);
    this.errors = errors;
  }
};
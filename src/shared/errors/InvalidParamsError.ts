import ValidationError from "../validation/ValidationError";

export default class InvalidParamsError extends Error {

    public statusCode: number;
    public errors: Array<ValidationError>;

    constructor(errors: Array<ValidationError>) {
      super();
      this.statusCode = 400;
      this.errors = errors;
      this.message = 'invalid params error'
    }

};
import BaseError from "./BaseError";

export default class ForbbidenError extends BaseError{
    
  constructor(message: string) {
    super(message, 'Forbidden Error', 403);
  }
  
};
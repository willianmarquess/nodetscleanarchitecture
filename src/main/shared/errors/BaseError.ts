export default abstract class BaseError extends Error{

    public statusCode: number;

    constructor(message: string, name: string, statusCode: number){
        super(message);
        super.name = name;
        this.statusCode = statusCode;
    }
}
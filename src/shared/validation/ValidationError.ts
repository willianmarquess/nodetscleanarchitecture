export default class ValidationError {

    public property: string;
    public message: string;

    constructor(property: string, message: string) {
        this.property = property;
        this.message = message;
    }
}
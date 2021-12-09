export default class ForbiddenError extends Error {

    public statusCode: number;

    constructor(message: string) {
      super(message);
      this.statusCode = 403;
      this.name = 'Forbidden Error';
    }

}
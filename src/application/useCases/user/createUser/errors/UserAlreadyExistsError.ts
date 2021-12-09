export default class UserAlreadyExistsError extends Error {

    public statusCode: number;

    constructor() {
      super('User already exists');
      this.statusCode = 409;
      this.name = 'Conflict Error';
    }
}
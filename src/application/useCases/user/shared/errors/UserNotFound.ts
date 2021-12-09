export default class UserNotFoundError extends Error {

    public statusCode: number;

    constructor() {
      super('User not found');
      this.statusCode = 404;
      this.name = 'Not found error';
    }
}
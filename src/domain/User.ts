import { uuid } from 'uuidv4';

export class User {
   
    public id: string;
    public email: string;
    public password: string;
  
    constructor(id: string, email: string, password: string) {
      this.id = id || uuid();
      this.email = email;
      this.password = password;
    }

  }

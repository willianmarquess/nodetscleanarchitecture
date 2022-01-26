import Validable from "../../../../../main/shared/validation/Validable";

export class CreateUserDTO extends Validable{
     
     public email: string;
     public password: string;

     constructor(email: string, password: string){
          super();
          this.email = email;
          this.password = password;
          this.isEmail(this.email, 'email', 'E-mail is invalid');
          this.isLengthBetween(this.password, 6, 12, 'password', 
          'the password must have the number of characters between 6 and 12');
     }
}
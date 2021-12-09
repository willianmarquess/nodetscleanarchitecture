import Validable from "../../../../../shared/validation/Validable";

export class UpdateUserDTO extends Validable {
     
     public id: string;
     public email: string;
     public password: string;

     constructor(id: string, email: string, password: string){
          super();
          this.id = id;
          this.email = email;
          this.password = password;
          this.isRequired(this.id, 'id', 'id is required');
          this.isEmail(this.email, 'email', 'E-mail is invalid');
          this.isLengthBetween(this.password, 6, 12, 'password', 
          'the password must have the number of characters between 6 and 12');    
     }

}
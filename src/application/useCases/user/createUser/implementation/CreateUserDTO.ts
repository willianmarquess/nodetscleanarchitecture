export class CreateUserDTO{
     public email: string;
     public password: string;

     constructor(email: string, password: string){
          this.email = email;
          this.password = password;
          this.validate()
     }

     validate(){
          if(this.email == null || this.email == ""){ throw new Error("Invalid e-mail")}
          if(this.password == null || this.password == ""){ throw new Error("Invalid password")}
     }
}
export class UpdateUserDTO{
     public id: string;
     public email: string;
     public password: string;

     constructor(id: string, email: string, password: string){
          this.id = id;
          this.email = email;
          this.password = password;
          this.validate();
     }

     validate(){
          if(this.id == null || this.id == ""){ throw new Error("Invalid Id")}
          if(this.email == null || this.email == ""){ throw new Error("Invalid Id")}
          if(this.password.length < 8){ throw new Error("Password must be at least 8 characters")}
     }
}
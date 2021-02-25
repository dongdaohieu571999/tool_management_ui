export class EmployeeAcc{
    username:string;
    password:string;
    id_role:string;

    constructor(username :string,password :string,id_role :string){
        this.username = username;
        this.password = password;
        this.id_role = id_role;
    }
    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

    getRole(){
        return this.id_role;
    }
}
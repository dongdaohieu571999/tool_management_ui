export class CustomerAccDTO {
     id :number;
     code :string;
     pass :string;
     status: string;
     fullName: string;

    constructor(code :string,pass :string,status :string){
        this.code = code;
        this.status = status;
        this.pass = pass;
        // this.id = id;
    }

    getId(){
        return this.id;
    }

    getCode(){
        return this.code;
    }

    getPass(){
        return this.pass;
    }

    getStatus(){
        return this.status;
    }

    getFullName(){
      return this.fullName;
    }
}

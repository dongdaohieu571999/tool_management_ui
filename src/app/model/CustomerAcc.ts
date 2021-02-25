export class CustomerAcc {
    // private id :number;
    private code :string;
    private pass :string;
    private status: boolean;

    constructor(code :string,pass :string,status :boolean){
        this.code = code;
        this.status = status;
        this.pass = pass;
        // this.id = id;
    }

    // getId(){
    //     return this.id;
    // }

    getCode(){
        return this.code;
    }

    getPass(){
        return this.pass;
    }

    getStatus(){
        return this.status;
    }
}
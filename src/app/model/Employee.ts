export class Employee{
    private code: string;
    private id_role: string;
    private status: string;

    constructor(code:string, id_role:string, status:string){
        this.code = code;
        this.id_role = id_role;
        this.status = status;
    }

    getCode(): string {
        return this.code;
    }

    getIdRole(): string {
        return this.id_role;
    }

    getStatus(): string {
        return this.status;
    }
}
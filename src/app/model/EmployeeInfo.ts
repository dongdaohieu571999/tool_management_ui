export class EmployeeInfo{
    private name: string;
    private address: string;
    private date_of_birth:Date;
    private phone : string;
    private email: string;
    private ID_card: string;
    private id_certificate: number;
    private start_time: Date;
    private end_time: Date;
    private sex: boolean;
    private id_acc: number;
    private id_labour_contract: number;
    private dept_id : number;
    private code :string;


    constructor(
        name:string,
        address:string, 
        email:string,
        phone:string,
        dob:Date,
        ID_card:string,
        id_certificate:number,
        starttime:Date,
        endtime:Date,
        sex:boolean,
        idAcc:number,
        idLabour:number,
        dept_id:number
        ){
        this.name = name;
        this.address = address;
        this.email = email;
        this.date_of_birth = dob;
        this.phone = phone;
        this.ID_card = ID_card;
        this.id_certificate = id_certificate;
        this.start_time = starttime;
        this.end_time = endtime;
        this.sex = sex;
        this.id_acc = idAcc;
        this.id_labour_contract = idLabour;
        this.dept_id = dept_id;
    }

    getName(): string {
        return this.name;
    }

    getDeptId(): number {
        return this.dept_id;
    }

    getPhone(): string {
        return this.phone;
    }

    getAddress(): string {
        return this.address;
    }

   
    getIdCard(): string {
        return this.ID_card;
    }

    getIDcertificate(): number {
        return this.id_certificate;
    }

    getStartTime(): Date {
        return this.start_time;
    }

    getEndTime(): Date {
        return this.end_time;
    }

    getSex(): boolean {
        return this.sex;
    }

    getIdacc(): number {
        return this.id_acc;
    }

    getidLabourContract(): number {
        return this.id_labour_contract;
    }
    
    getEmail(): string {
        return this.email;
    }
   
    getDateofBirth(): Date {
        return this.date_of_birth;
    }
}
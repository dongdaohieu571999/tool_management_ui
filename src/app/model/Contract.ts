export class Contract{
    id:number;
    id_customer:number;
    name_contract_owner:String;
    payment_period:String;
    insurance_type:String;
    id_main_interest:number;
    id_illustration:number;
    start_time:Date;
    end_time:Date;
    status:String;
    approval_status:String;
    contract_total_value:number;
    date_next_payment:Date;   
    id_employee:number;
    
    constructor(id:number,id_customer:number,name_contract_owner:String,payment_period:String,insurance_type:String,id_main_interest:number,id_illustration:number,start_time:Date,end_time:Date,status:String,approval_status:String,contract_total_value:number,date_next_payment:Date,id_employee:number){
        this.id = id;
        this.id_customer = id_customer;
        this.name_contract_owner = name_contract_owner;
        this.payment_period = payment_period;
        this.insurance_type = insurance_type;
        this.id_main_interest = id_main_interest;
        this.id_illustration = id_illustration;
        this.start_time = start_time;
        this.end_time = end_time;
        this.status = status;
        this.approval_status = approval_status;
        this.contract_total_value = contract_total_value; 
        this.date_next_payment = date_next_payment;
        this.id_employee = id_employee;
    }
}

import { Interest } from "./Interest";

export class RelatedPerson{
    id:number;
 full_name:string;
 relation:string;
 date_of_birth:Date;
 gender:boolean;
 carreer_group:number;
 listSubInterest:Array<Interest>;

    constructor(id:number,
        full_name:string,
        relation:string,
        date_of_birth:Date,
        gender:boolean,
        carreer_group:number,
        listSubInterest:Array<Interest>){
            this.full_name = full_name;
            this.relation = relation;
            this.date_of_birth = date_of_birth;
            this.gender = gender;
            this.carreer_group = carreer_group;
            this.listSubInterest = listSubInterest;
    }
}
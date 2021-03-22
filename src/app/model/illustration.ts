import { IllustrationMainInterest } from "./IllustrationMainInterest";
import { IllustrationSubInterest } from "./IllustrationSubInterest";

export class Illustration{
    id:number;
    id_customer_info:number;
    create_time:Date;
    interest_name:String;

    illustrationMainInterest:IllustrationMainInterest;
    illustrationSubInterestList:Array<IllustrationSubInterest>;


    constructor(id:number,
        id_customer_info:number,
        create_time:Date,
        interest_name:String,
        illustrationMainInterest:IllustrationMainInterest,
        illustrationSubInterestList:Array<IllustrationSubInterest>,){

            this.id = id;
            this.id_customer_info = id_customer_info;
            this.create_time = create_time;
            this.interest_name = interest_name;
            this.illustrationMainInterest = illustrationMainInterest;
            this.illustrationSubInterestList = illustrationSubInterestList;
    }

}
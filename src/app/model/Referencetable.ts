import { MultiplierForAge } from "./MultiplierForAge";
import { MultiplierForCareerGroup } from "./MultiplierForCareerGroup";
import { MultiplierForGenders } from "./MultiplierForGenders";
import { MultiplierForMainInterest } from "./MultiplierForMainInterest";
import { MultiplierForPaymentPeriod } from "./MultiplierForPaymentPeriod";
import { MultiplierForSubInterests } from "./MultiplierForSubInterests";

export class Referencetable{
    multiplierForAge: Array<MultiplierForAge> ;
    multiplierForCareerGroup : Array<MultiplierForCareerGroup>;
    multiplierForGenders : Array<MultiplierForGenders> ;
    multiplierForMainInterest : Array<MultiplierForMainInterest> ;
    multiplierForPaymentPeriod : Array<MultiplierForPaymentPeriod> ;
    multiplierForSubInterests : Array<MultiplierForSubInterests> ;
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { Illustration } from 'src/app/model/Illustration';
import { IllustrationMainInterest } from 'src/app/model/IllustrationMainInterest';
import { IllustrationSubInterest } from 'src/app/model/IllustrationSubInterest';
import { Interest } from 'src/app/model/Interest';
import { MultiplierForPaymentPeriod } from 'src/app/model/MultiplierForPaymentPeriod';
import { Referencetable } from 'src/app/model/Referencetable';
import { RelatedPerson } from 'src/app/model/RelatedPerson';
import { CommonService } from 'src/app/services/common/common.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';
import { InterestService } from 'src/app/services/interest/interest.service';
import { RefertableService } from 'src/app/services/refertable/refertable.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-create-illustration',
  templateUrl: './create-illustration.component.html',
  styleUrls: ['./create-illustration.component.css']
})
export class CreateIllustrationComponent implements OnInit {

  constructor(private snackBar:SnackbarService,private spinner:NgxSpinnerService,private referenceTable:RefertableService,private illustService : IllustrationService,private interest:InterestService,private activeRoute:ActivatedRoute,private common:CommonService,private customerService:CustomerService) { 
  }

  relatedPerson = new Array<RelatedPerson>();
  customerInfo = new CustomerInfo(0,new Date(),0,'','','','','','','','','','','','','',0,0,0,0,0,'','','',0,'','','','','','','','','','','','','','','','','','',false,'',0,0,'',new Date(),false,new Date(),'');
  mainInterestList: Array<Interest>;
  subInterestList: Array<Interest>;
  subInterestListCopy:Array<Interest>;
  mainInterestSelect= new Interest;
  reference=new Referencetable();

  //hệ số định kỳ hàng năm
  mulPeriod:MultiplierForPaymentPeriod;

  //tổng số tiền bảo hiểm cuối cùng
  totalPayment=0;
  


  //Them cac bien thuoc bang minh hoa o day

  create_time_ill = new Date();
  
  illustrationMainInterest=new IllustrationMainInterest(0,this.mainInterestSelect.id,'',new Date(),0,false,0,'','','',0);

  illustration = new Illustration(0,0,new Date(),this.mainInterestSelect.interest_name,0,'',this.illustrationMainInterest,[]);


  //Them cac bien thuoc bang minh hoa o day


  ngOnInit(): void {
    this.getAllSubInterest();
    this.getAllMainInterest();
    this.getInfoCustomer();
    this.referenceTable.getAllReference().subscribe((data => {
      this.reference = data;
    }))
  }

  onCalculate(){
    this.spinner.show();
    if(this.reference.multiplierForAge.length != 0){
      this.CalculateFee(this.reference,this.illustration);
    } else {
      this.snackBar.openSnackBar("Vui Lòng Tải Lại Trang",'Đóng');
    }
    this.spinner.hide();
  }

  CalculateFee(ref:Referencetable,illustration:Illustration){
    this.totalPayment=0;
    // phí của gói quyền lợi chính
    this.illustrationMainInterest.fee_value = Math.round(ref.multiplierForMainInterest.find(i => i.main_interest_id == this.mainInterestSelect.id)['multiplier']*
    this.illustrationMainInterest.denominations*ref.multiplierForGenders.find(i => i.gender == this.illustrationMainInterest.gender_insured_person? '1':'0')['multiplier']*
    (1+this.calculateAge(this.illustrationMainInterest.birth_date_insured_person)*ref.multiplierForAge.find(i => i.age == this.calculateAge(this.illustrationMainInterest.birth_date_insured_person))['multiplier'])*
    ref.multiplierForCareerGroup.find(i => i.group_number == this.illustrationMainInterest.carrier_group_insured_person)['multiplier']).toLocaleString();

    // cộng vào tổng giá trị
    this.totalPayment += this.convertStringToNum(this.illustrationMainInterest.fee_value);

    // phí của gói quyền lợi phụ của người được bảo hiểm
    if(this.subInterestListCopy.find(i => i.isDisable == false)){// kiểm tra xem người được bảo hiểm có quyền lợi phụ hay không
      for(let item of this.subInterestListCopy){
        if(!item.isDisable){// tìm kiếm những trường đã được tích chọn
        item.fee_value = Math.round(item.denominations * ref.multiplierForSubInterests.find(i => i.sub_interest_id == item.id)['multiplier'] *
                          ref.multiplierForGenders.find(i => i.gender == this.illustrationMainInterest.gender_insured_person ? '1':'0')['multiplier'] *
                          (1 + this.calculateAge(this.illustrationMainInterest.birth_date_insured_person) * ref.multiplierForAge.find(i => i.age == this.calculateAge(this.illustrationMainInterest.birth_date_insured_person))['multiplier']) *
                          ref.multiplierForCareerGroup.find(i => i.group_number == this.illustrationMainInterest.carrier_group_insured_person)['multiplier']).toLocaleString();
        
      // cộng vào tổng giá trị
      this.totalPayment += this.convertStringToNum(item.fee_value);

        } else {
          item.fee_value = '';
        }
        }
    }
    

    // phí của gói quyền lợi phụ của những người liên quan
for(let relate of this.relatedPerson){
    for(let interest of relate.listSubInterest){
      if(!interest.isDisable){
      interest.fee_value = Math.round(interest.denominations * ref.multiplierForSubInterests.find(i => i.sub_interest_id == interest.id)['multiplier'] *
                        ref.multiplierForGenders.find(i => i.gender == relate.gender? '1':'0')['multiplier'] *
                        (1 + this.calculateAge(relate.date_of_birth) * ref.multiplierForAge.find(i => i.age == this.calculateAge(relate.date_of_birth))['multiplier']) *
                        ref.multiplierForCareerGroup.find(i => i.group_number == relate.carreer_group)['multiplier']).toLocaleString(); 
        
      // cộng vào tổng giá trị
      this.totalPayment += this.convertStringToNum(interest.fee_value);
      
      } else {
        interest.fee_value ='';
      }
    }
  }

  // tổng kết totalPayment
  this.totalPayment = Math.round(this.totalPayment*this.mulPeriod.multiplier);

  this.illustration.total_fee = this.totalPayment;
  this.illustration.payment_period = this.mulPeriod.description;

  }

  convertStringToNum(numberString:string):number{
    return parseInt(numberString.replace(/\D/g,''));
  }

  addField(){
    var relatedPer1 = new RelatedPerson('','',new Date(),true,0,[],[]);
    // deep copy this.subInterestList
    let list = this.subInterestList.map(x => Object.assign({},x));
    relatedPer1.listSubInterest = list
    if(this.relatedPerson.length<10){
      this.relatedPerson.push(relatedPer1);
    }
  }

  getAllMainInterest(){
    this.interest.getAllMainInterest().subscribe((data => {
      for(let interest of data){
        interest.isDisable = true;
      }
      this.mainInterestSelect =  data[0];
      this.mainInterestList = data;
    }))
  }

  getAllSubInterest(){
    this.interest.getAllSubInterest().subscribe((data => {
      for(let interest of data){
        interest.isDisable = true;
      }
      this.subInterestList = data;
      this.subInterestListCopy = this.subInterestList.map(x => Object.assign({},x));
      
    }))
  }

  getInfoCustomer(){
    this.activeRoute.queryParams.subscribe(params => {
      this.customerService.getOneAccCustomer(params['id'],this.common.getCookie('token_key')).subscribe((data => {
        this.customerInfo=data;
        this.illustrationMainInterest.full_name_insurance_buyer = this.customerInfo.full_name;
        this.illustrationMainInterest.id_illustration = params['id'];
      }))
    })
  }

  removeField(index: number){
    if (index > -1) {
      this.relatedPerson.splice(index, 1);
    }
  }

  activeSubIllustration(index : number) {
        this.subInterestListCopy[index].isDisable = !this.subInterestListCopy[index].isDisable;
        return;
    }


  activeSubIllustrationRelatedPerson(indexParent:number,indexChild:number){
    this.relatedPerson[indexParent].listSubInterest[indexChild].isDisable = !this.relatedPerson[indexParent].listSubInterest[indexChild].isDisable;
        return;

  }

  calculateAge(birthday:Date){
    var diff_ms = Date.now() - new Date(birthday).getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  save(){
    this.illustration.illustrationSubInterestList = [];
    for(let interest of this.subInterestListCopy){
      if(!interest.isDisable){
      this.activeRoute.queryParams.subscribe(params => {

        let subInterest = new IllustrationSubInterest(params['id'],interest.id,this.illustrationMainInterest.full_name_insured_person
        ,this.illustrationMainInterest.insurance_buyer_relation_insured_person,this.illustrationMainInterest.birth_date_insured_person,0,
        this.illustrationMainInterest.gender_insured_person,this.illustrationMainInterest.carrier_group_insured_person,interest.denominations,
        interest.fee_value,false);

        
        this.illustration.illustrationSubInterestList.push(subInterest);
      })
    }
    }

    for(let relatePer of this.relatedPerson){
      for(let interest of relatePer.listSubInterest){
        if(!interest.isDisable){
        this.activeRoute.queryParams.subscribe(params => {
          this.illustration.illustrationSubInterestList.push(new IllustrationSubInterest(params['id'],interest.id,relatePer.full_name
          ,relatePer.relation,relatePer.date_of_birth,this.calculateAge(relatePer.date_of_birth),relatePer.gender,relatePer.carreer_group,interest.denominations,interest.fee_value
          ,true));
        })
      }
      }
    }
    this.illustration.illustrationMainInterest.id_main_interest = this.mainInterestSelect.id;
    this.illustration.id_customer_info = this.customerInfo.id;
    this.illustration.illustrationMainInterest.age_insured_person = this.calculateAge(this.illustrationMainInterest.birth_date_insured_person);
    this.illustService.saveOneIllustration(this.illustration).subscribe((data => {
      console.log('ok');
    }))
  }

}

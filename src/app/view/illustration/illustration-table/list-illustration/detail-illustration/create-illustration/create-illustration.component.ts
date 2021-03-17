import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { Interest } from 'src/app/model/Interest';
import { RelatedPerson } from 'src/app/model/RelatedPerson';
import { CommonService } from 'src/app/services/common/common.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { InterestService } from 'src/app/services/interest/interest.service';

@Component({
  selector: 'app-create-illustration',
  templateUrl: './create-illustration.component.html',
  styleUrls: ['./create-illustration.component.css']
})
export class CreateIllustrationComponent implements OnInit {

  constructor(private interest:InterestService,private activeRoute:ActivatedRoute,private common:CommonService,private customerService:CustomerService) { 
  }

  relatedPerson = new Array<RelatedPerson>();
  customerInfo : CustomerInfo;
  mainInterestList: Array<Interest>;
  subInterestList: Array<Interest>;
  subInterestListCopy:Array<Interest>;
  mainInterestSelect:Interest;


  ngOnInit(): void {
    this.getAllSubInterest();
    this.getAllMainInterest();
    this.getInfoCustomer();
    
    
  }

  addField(){
    var relatedPer1 = new RelatedPerson('','',new Date(),true,0,[]);
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
      var relatedPer = new RelatedPerson('','',new Date(),true,0,[]);
      let list = this.subInterestList.map(x => Object.assign({},x));
      relatedPer.listSubInterest = list;
      this.relatedPerson.push(relatedPer);
    }))
  }

  getInfoCustomer(){
    this.activeRoute.queryParams.subscribe(params => {
      this.customerService.getOneAccCustomer(params['id'],this.common.getCookie('token_key')).subscribe((data => {
        this.customerInfo=data;
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

}

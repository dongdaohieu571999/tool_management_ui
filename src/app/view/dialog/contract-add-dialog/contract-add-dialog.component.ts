import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { Contract } from 'src/app/model/Contract';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { Illustration } from 'src/app/model/Illustration';
import { IllustrationContractCreate } from 'src/app/model/IllustrationContractCreate';
import { CommonService } from 'src/app/services/common/common.service';
import { ContractService } from 'src/app/services/contract/contract.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';

@Component({
  selector: 'app-contract-add-dialog',
  templateUrl: './contract-add-dialog.component.html',
  styleUrls: ['./contract-add-dialog.component.css']
})
export class ContractAddDialogComponent implements OnInit {

  constructor(private IllustrationService:IllustrationService,private contractService:ContractService,private common:CommonService,private customerService : CustomerService) { }
  customerinfos : Array<CustomerInfo>;
  illustrations : Array<Illustration>;


  ngOnInit(): void {
    this.customerService.getAllCustomerInfo(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data => {
      this.customerinfos = data;
      console.log(this.customerinfos);
    }))
    this.IllustrationService.getAllIllustration().subscribe((data =>{
      this.illustrations = data;
      console.log(this.illustrations);
    }))

      
  }
  illustrationId:number;
  IllustrationContract : IllustrationContractCreate;

  contractOwnerName:String;
  customerId:number;
  insuranceType:String;
  insuranceId:number;

  onchangeValue(){
    this.IllustrationService.getIllustrationContractCreate(this.illustrationId).subscribe((data =>{
      this.IllustrationContract = data;
      this.contractOwnerName = this.IllustrationContract.full_name_insured_person;
      this.customerId = this.IllustrationContract.id_customer_info;
      this.insuranceType = this.IllustrationContract.interest_name;
      this.insuranceId = this.IllustrationContract.insurance_id;
    }))
  }
  status:boolean = false;
  approval_status:String = "CXD";


  onSubmit(contractForm : NgForm){
    let contract = new Contract(
      contractForm.value.contractId,
      contractForm.value.customerId,
      contractForm.value.contractOwnerName,
      contractForm.value.period,
      contractForm.value.insuranceType,
      contractForm.value.insuranceId,
      contractForm.value.illustrationId,
      contractForm.value.signDate,
      contractForm.value.outOfDate,
      contractForm.value.status,
      contractForm.value.approval_status,
      contractForm.value.totalPayment,
      contractForm.value.signDate,
      1
      );
      console.log(contract);
      this.contractService.addContract(contract).subscribe((data => {
        console.log(data);
        console.log(contract);
      }))
  }
 
}

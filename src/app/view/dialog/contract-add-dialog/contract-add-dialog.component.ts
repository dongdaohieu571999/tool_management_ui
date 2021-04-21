import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { NgxSpinnerService } from 'ngx-spinner';
import { Contract } from 'src/app/model/Contract';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { Illustration } from 'src/app/model/Illustration';
import { Referencetable } from 'src/app/model/Referencetable';
import { CommonService } from 'src/app/services/common/common.service';
import { ContractService } from 'src/app/services/contract/contract.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';
import { RefertableService } from 'src/app/services/refertable/refertable.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-contract-add-dialog',
  templateUrl: './contract-add-dialog.component.html',
  styleUrls: ['./contract-add-dialog.component.css']
})
export class ContractAddDialogComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private snackBar:SnackbarService,private referenceTable:RefertableService,private IllustrationService:IllustrationService,private contractService:ContractService,private common:CommonService,private customerService : CustomerService) { }
  customerinfos : Array<CustomerInfo>;
  illustrations : Array<Illustration>;
  contract=new Contract(0,0,'',0,'',0,0,new Date(),new Date(),false,'CXD',0,jwt_decode(this.common.getCookie('token_key'))['sub']);


  ngOnInit(): void {
    this.customerService.getAllCustomer(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data => {
      this.customerinfos = data;
    }))
  }
  illustrationId:number;
  IllustrationContract:Illustration;
  payment_period:string;

  getAllIllustByCustID(id:number){
    if(id === -1){
      return;
    }else {
      this.IllustrationService.getAllIllustrationBelongCustomer(id).subscribe((data => {
        this.illustrations = data;
      }))
    }

    
  }

  onchangeValue(){
    if(this.illustrationId != -1){
    this.IllustrationService.getIllustrationContractCreate(this.illustrationId).subscribe((data =>{
      this.IllustrationContract = data;
      this.contract.id_illustration = this.illustrationId;
      this.contract.id_customer = this.IllustrationContract.id_customer_info;
      this.contract.name_contract_owner = this.IllustrationContract.illustrationMainBenifit.full_name_insurance_buyer;
      this.contract.insurance_type = this.IllustrationContract.benifit_name;
      this.contract.id_main_benifit = this.IllustrationContract.illustrationMainBenifit.id_main_benifit;
      this.contract.contract_total_value = this.IllustrationContract.total_fee;
      this.contract.payment_period_id = this.IllustrationContract.payment_period_id;
      this.referenceTable.getAllReference().subscribe((data => {
        let ref = new Referencetable();
        ref = data;
        this.payment_period = ref.multiplierForPaymentPeriod.find(i => i.priod_id == this.contract.payment_period_id).description;
      }))
    }))
  } else {
    return;
  }
  }


  onSubmit(){
      this.spinner.show();
      this.contractService.addContract(this.contract).subscribe((data => {
        this.spinner.hide();
        this.contractService.invokeRefreshTableFun();
        this.snackBar.openSnackBar("Lưu Hợp Đồng Thành Công","Đóng");
      }))
  }
 
}

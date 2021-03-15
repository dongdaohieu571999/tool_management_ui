import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { Contract } from 'src/app/model/Contract';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CommonService } from 'src/app/services/common/common.service';
import { ContractService } from 'src/app/services/contract/contract.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-contract-add-dialog',
  templateUrl: './contract-add-dialog.component.html',
  styleUrls: ['./contract-add-dialog.component.css']
})
export class ContractAddDialogComponent implements OnInit {

  constructor(private contractService:ContractService,private common:CommonService,private customerService : CustomerService) { }
  customerinfos : Array<CustomerInfo>;


  ngOnInit(): void {
    this.customerService.getAllCustomerInfo(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data => {
      this.customerinfos = data;
    }))
  
  }

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
      this.contractService.addContract(contract).subscribe((data => {
        console.log(data);
        console.log(contract);
      }))
  }
}

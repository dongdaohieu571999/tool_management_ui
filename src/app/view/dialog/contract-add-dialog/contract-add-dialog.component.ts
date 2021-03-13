import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contract } from 'src/app/model/Contract';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { ContractService } from 'src/app/services/contract/contract.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-contract-add-dialog',
  templateUrl: './contract-add-dialog.component.html',
  styleUrls: ['./contract-add-dialog.component.css']
})
export class ContractAddDialogComponent implements OnInit {

  constructor(private contractService:ContractService,private customerService : CustomerService) { }
  customerinfos : Array<CustomerInfo>;

  searchText: string = '';

  ngOnInit(): void {
    this.customerService.getAllCustomerInfo().subscribe((data => {
      this.customerinfos = data;
      console.log(data);
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
      contractForm.value.signDate
      );
      this.contractService.addContract(contract).subscribe((data => {
        console.log(data);
        console.log(contract);
      }))
  }
}

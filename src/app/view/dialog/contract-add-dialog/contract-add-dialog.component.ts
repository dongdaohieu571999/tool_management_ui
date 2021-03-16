import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Contract } from 'src/app/model/Contract';
import { CustomerAccDTO } from 'src/app/model/CustomerAccountDTO';
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
  customers: Array<CustomerAccDTO>;
  searchText: string = '';

  formControl: FormControl;

  options = new Array();
  filteredOptions: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerAccountDTO().subscribe((data => {
      this.customers = data;
      console.log(data);
    }));

    this.filteredOptions = this.formControl.valueChanges
    .pipe(startWith(''), map(value => this._filter(value)));
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

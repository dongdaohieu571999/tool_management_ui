import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerAcc } from 'src/app/model/CustomerAcc';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';


@Component({
  selector: 'app-view-customer-table',
  templateUrl: './view-customer-table.component.html',
  styleUrls: ['./view-customer-table.component.css']
})
export class ViewCustomerTableComponent implements OnInit {

  

  ngOnInit(): void {
    this.customerService.getAllCustomerInfo().subscribe((data => {
      this.data = data;
      console.log(data);
      this.totalRecords = data.length;
    }))
  }

  page:number = 1;
  data: Array<any>;
  totalRecords:number;

  status: boolean = false;
  constructor(private customerService :CustomerService) { }
  
  listCustomer :CustomerInfo[] = [];

  onSubmit(addAccForm :NgForm): void{
    const customerAcc = new CustomerAcc(addAccForm.value.code,addAccForm.value.pass,true);
    this.customerService.addOneAccCustomer(customerAcc).subscribe((data => {
      console.log("save OK");
    }))
  }

  onSelectAcc(customerInfo: CustomerInfo){
    this.customerService.getOneAccCustomer(customerInfo);
  }

  displayAddCustomerAccDialog(): void {
    this.status = !this.status;
  }
}

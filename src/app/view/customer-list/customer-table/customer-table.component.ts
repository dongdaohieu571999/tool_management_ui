import { Component, OnInit } from '@angular/core';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {

  constructor(public customerService : CustomerService) { }

  customerinfos : Array<CustomerInfo>;

  ngOnInit(): void {
    this.customerService.getAllCustomerInfo().subscribe((data => {
         this.customerinfos = data;
         console.log(this.customerinfos);
    }))
  }


}

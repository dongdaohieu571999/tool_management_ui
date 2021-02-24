import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-view-customer-table',
  templateUrl: './view-customer-table.component.html',
  styleUrls: ['./view-customer-table.component.css']
})
export class ViewCustomerTableComponent implements OnInit {

  status: boolean = false;
  listCustomer: Customer[] = [];

  constructor( private customerService : CustomerService) { }
   
  ngOnInit(): void {
    this.customerService.getAllCustomerInfo().subscribe((data => {
      this.listCustomer = data;
      console.log(this.listCustomer);
    }))
  }

  displayAddCustomerAccDialog(): void {
    this.status = !this.status;
  }
}

import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  constructor() { }
   
  ngOnInit(): void {
    
  }

}

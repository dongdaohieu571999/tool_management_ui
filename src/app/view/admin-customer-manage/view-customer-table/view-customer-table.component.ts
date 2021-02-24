import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-view-customer-table',
  templateUrl: './view-customer-table.component.html',
  styleUrls: ['./view-customer-table.component.css']
})
export class ViewCustomerTableComponent implements OnInit {

  status: boolean = false;
  constructor( private customerService : CustomerService) { }
   
  ngOnInit(): void {
    this.customerService.getAllCustomerInfo().subscribe((data => {
      console.log(data);
    }))
  }

  displayAddCustomerAccDialog(): void {
    this.status = !this.status;
  }
}

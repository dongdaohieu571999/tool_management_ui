import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerAcc } from 'src/app/model/CustomerAcc';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-view-customer-table',
  templateUrl: './view-customer-table.component.html',
  styleUrls: ['./view-customer-table.component.css']
})
export class ViewCustomerTableComponent implements OnInit {

  status: boolean = false;
  constructor(private customerService :CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit(addAccForm :NgForm): void{
    const customerAcc = new CustomerAcc(addAccForm.value.code,addAccForm.value.pass,true);
    this.customerService.addOneAccCustomer(customerAcc).subscribe((data => {
      console.log("oki ahihi");
    }))
  }

  displayAddCustomerAccDialog(): void {
    this.status = !this.status;
  }
}

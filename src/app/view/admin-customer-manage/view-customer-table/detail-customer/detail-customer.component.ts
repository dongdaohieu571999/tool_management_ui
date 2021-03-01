import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {

  constructor(private customerService:CustomerService,private activatedRoute: ActivatedRoute) { }

  customer: CustomerInfo;

  ngOnInit(): void {
    this.customer = JSON.parse(this.activatedRoute.snapshot.params["customerInfo"]);
    console.log(this.customer);
  }

}

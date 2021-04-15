import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {

  constructor(public common:CommonService,private route:Router) { }

  ngOnInit(): void {
  }

  exit(){
    this.common.deleteCookie('token_customer');
    this.route.navigate(['login-customer']);
  }

}

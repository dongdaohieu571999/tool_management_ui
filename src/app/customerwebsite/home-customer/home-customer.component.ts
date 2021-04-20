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
    if(this.common.getCookie('token_key')){
      this.route.navigate(['dashboard'])
    }
  }

  exit(){
    this.common.deleteCookie('token_customer');
    this.route.navigate(['login-customer']);
  }

}

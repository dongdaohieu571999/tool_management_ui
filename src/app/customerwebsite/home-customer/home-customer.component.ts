import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {

  constructor(public common: CommonService, private route: Router) { }

  KichThuoc:any;
  ChuyenSlide:any;
  Img:any;
  Max:any;
  Chuyen:any;

  ngOnInit(): void {
    if (this.common.getCookie('token_key')) {
      this.route.navigate(['dashboard'])
    }
    this.KichThuoc = (<HTMLInputElement>document.getElementsByClassName("slide")[0]).clientWidth;
    this.ChuyenSlide = (<HTMLInputElement>document.getElementsByClassName("chuyen-slide")[0]);
    this.Img = this.ChuyenSlide.getElementsByTagName("img");
    this.Max = this.KichThuoc * this.Img.length;
    this.Max -= this.KichThuoc;
    this.Chuyen = 0;
    const imageChangeTime = interval(2000);
    imageChangeTime.subscribe((d) => {
      this.Next();
    })
  }

  exit() {
    this.common.deleteCookie('token_customer');
    this.route.navigate(['login-customer']);
  }


  
 Next() {
   console.log("asdasdasda");
  if (this.Chuyen < this.Max) this.Chuyen += this.KichThuoc;
  else this.Chuyen = 0;
  this.ChuyenSlide.style.marginLeft = '-' + this.Chuyen + 'px';
}

 Back() {
  if (this.Chuyen == 0) this.Chuyen = this.Max;
  else this.Chuyen -= this.KichThuoc;
  this.ChuyenSlide.style.marginLeft = '-' + this.Chuyen + 'px';
}

  
}

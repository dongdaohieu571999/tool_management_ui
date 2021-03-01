import { Component ,ViewChild, OnInit} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthenService } from './services/authen/authen.service';
import { CommonService } from './services/common/common.service';
import { EmployeeService } from './services/employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISSYSTEM';
  @ViewChild('sidenav') sidenav: MatSidenav;
  public isOpened = false;

  constructor(public authenService: AuthenService, public router: Router,private common:CommonService,private authenticationService:AuthenService){
    if(this.common.getCookie("token_key") === ''){
      this.authenService.isAuthen=false;
    }
    else {
      this.authenService.isAuthen = true;
      this.authenService.getRoleID();
    }

    if(this.authenticationService.isAuthen){
      var url =window.location.href;
      if(url.substring(22,url.length) === 'login'){
        this.router.navigate(['dashboard']);
        return;
      }
      
      
    } else if (!this.authenticationService.isAuthen){
      this.router.navigate(['login']);
      return;
    }
  }

  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }

  public closeLeftSide() {
    this.isOpened = false;
  }

  public logout(){
    this.authenService.isAuthen = false;
    this.common.deleteCookie("token_key");
    this.router.navigate(['login']);
    this.closeLeftSide();
  }


}

import { Component ,ViewChild, OnInit} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthenService } from './services/authen/authen.service';
import { CommonService } from './services/common/common.service';
import jwt_decode from 'jwt-decode';
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

  constructor(public authenService: AuthenService, public common:CommonService,private employeeSer:EmployeeService,
    public router: Router,private authenSer:AuthenService,private authenticationService:AuthenService){
    
    var url =window.location.href;
    if(this.common.getCookie("token_key") === ''){
      this.authenService.isAuthen=false;
    }
    else {
      this.authenService.isAuthen = true;
      this.authenService.getRoleID();
    }

    if(this.authenticationService.isAuthen){
      this.employeeSer.getDetailEmployebyCode(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data => {
        this.authenSer.empolyeeInfo = data;
      }))
      if(url.substring(22,url.length) === 'login'){
        if(this.authenticationService.id_role == '2'){
          this.router.navigate(['dashboard']);
        } else if (this.authenticationService.id_role == '1'){
          this.router.navigate(['employee-manage']);
        } else if (this.authenticationService.id_role == '3'){
          this.router.navigate(['appraiser-request-manage']);
        }
        
        return;
      } else if(url.substring(22,url.length) === ''){
        return;
      }
    } else if (!this.authenticationService.isAuthen && (url.substring(22,41) === 'confirm-change-pass')|| url.substring(22,41) === 'forget-password'){
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

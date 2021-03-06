import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SigInData } from 'src/app/model/SigInData';
import { CommonService } from '../common/common.service';
import { EmployeeService } from '../employee/employee.service';
import { ServerHttpService } from '../http/server-http.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  id_role = "";
  isAuthen = false;

  constructor(private spinner: NgxSpinnerService,public snackBar:SnackbarService,private router: Router, private serverhttpService:ServerHttpService,private employee:EmployeeService,private common:CommonService) { }

  authenticate(sigIndata: SigInData){
    if(sigIndata.getCode() == '' || sigIndata.getPass() == ''){
      this.snackBar.openSnackBar("Vui Lòng Xem Lại Tài Khoản Và Mật Khẩu",'ĐÓNG');
      return;
    } else {
      try{
        this.spinner.show();
        this.serverhttpService.getAcc(sigIndata.getCode(),sigIndata.getPass()).subscribe((data =>{
          if(data['status_code'] !== 'not ok'){
            this.isAuthen = true;
            this.common.setCookie('token_key',data['token_key'],3);
            this.router.navigate(['dashboard']);
            this.getRoleID();
            this.spinner.hide();
            return true;
          } else {
            this.snackBar.openSnackBar("Vui Lòng Xem Lại Tài Khoản Và Mật Khẩu",'ĐÓNG');
            this.isAuthen = false;
            this.spinner.hide();
            return false;
          }
        }));
      } catch (error){
        this.snackBar.openSnackBar("Vui Lòng Xem Lại Tài Khoản Và Mật Khẩu",'ĐÓNG');
      };
    
  }
    return false;
  }

  getRoleID(){
    this.employee.getIdRole().subscribe((data1 => {
      this.id_role = data1['id_role'];
     }));
  }

  
}

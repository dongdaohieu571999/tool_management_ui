import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/services/common/common.service';
import { ServerHttpService } from 'src/app/services/http/server-http.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { EmployeeAcc } from 'src/app/model/EmployeeAcc';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private snackBar:SnackbarService,private spinner:NgxSpinnerService,
    private common:CommonService,private httpService:ServerHttpService) { }

  ngOnInit(): void {
    this.common.titlePage = "Đổi Mật Khẩu";
  }

  onSubmit(changePassForm:NgForm){
    this.spinner.show();
    if(changePassForm.value.newPass == changePassForm.value.confirmNewPass){
      this.employeeService.getAccByCode(this.common.getCookie('token_key')).subscribe((data => {
        if(data['pass'] == changePassForm.value.oldPass){
          this.employeeService.updateEmployeeAccount(new EmployeeAcc(jwtDecode(this.common.getCookie('token_key'))['sub'],
          changePassForm.value.newPass,0,true)).subscribe((data => {
            if(data != null){
              this.snackBar.openSnackBar('Cập Nhật Mật Khẩu Thành Công','Đóng');
              changePassForm.reset();
              this.spinner.hide();
            } else {
              this.snackBar.openSnackBar('Cập Nhật Mật Khẩu Không Thành Công','Đóng');
              this.spinner.hide();
            }
          }))
        } else {
          this.snackBar.openSnackBar('Mật Khẩu Cũ Không Đúng','Đóng');
          this.spinner.hide();
      return;
        }
      }))
    } else {
      this.snackBar.openSnackBar('Mật Khẩu Mới Không Khớp','Đóng');
      this.spinner.hide();
      return;
    }
  }

}

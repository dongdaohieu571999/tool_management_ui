import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { EmployeeAcc } from 'src/app/model/EmployeeAcc';
import { EmployeeInfo } from 'src/app/model/EmployeeInfo';
import { EmployeeInfoDTO } from 'src/app/model/EmployeeInfoDTO';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-admin-add-account-employee',
  templateUrl: './admin-add-account-employee.component.html',
  styleUrls: ['./admin-add-account-employee.component.css']
})
export class AdminAddAccountEmployeeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: EmployeeInfo,private spinner:NgxSpinnerService,private employeeService:EmployeeService,private notiService: SnackbarService,) { }

  role:number;
  passwordEnter : String;
 confirmPassWordEnter:String;
 checkPassword : boolean;
  ConfirmPassword(){
    if(this.passwordEnter == this.confirmPassWordEnter){
      this.checkPassword = true;
    }
    else{
      this.checkPassword = false;
    }
  }
  
  onSubmit(addAccEmployeeForm : NgForm,employeeInfo:EmployeeInfo){
    this.spinner.show();
    if(addAccEmployeeForm.value.code != '' && addAccEmployeeForm.value.pass != ''){
    let employeeAcc = new EmployeeAcc(addAccEmployeeForm.value.code,addAccEmployeeForm.value.pass,this.role,true);
    this.employeeService.addOneAccEmployee(employeeAcc).subscribe((dataid => {
      if(dataid != null){
        this.employeeService.getDetailEmployebyID(employeeInfo.id).subscribe((employeeInfoDTO =>{
          employeeInfoDTO.id_acc = dataid;
          employeeInfoDTO.dept_id=this.role;
        this.employeeService.UpdateEmployeeInfo(employeeInfoDTO).subscribe((data1 => {
          this.notiService.openSnackBar("Thêm Data Thành Công!",'Đóng');
          this.employeeService.invokeRefreshTableFun();
          this.spinner.hide();
        }));
        }))        
      } else {
        this.notiService.openSnackBar("Tài Khoản Khách Hàng Đã Tồn Tại!",'Đóng');
        this.spinner.hide();
      }
    }));
  } else {
    this.notiService.openSnackBar("Vui Lòng Điền Đủ Thông Tin",'Đóng');
  }

  }

  ngOnInit(): void {
  }

}

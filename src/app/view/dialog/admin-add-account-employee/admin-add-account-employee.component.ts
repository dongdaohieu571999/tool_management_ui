import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { EmployeeAcc } from 'src/app/model/EmployeeAcc';
import { EmployeeInfo } from 'src/app/model/EmployeeInfo';
import { EmployeeInfoDTO } from 'src/app/model/EmployeeInfoDTO';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { AdminAddAccCustomerComponent } from '../admin-add-acc-customer/admin-add-acc-customer.component';

@Component({
  selector: 'app-admin-add-account-employee',
  templateUrl: './admin-add-account-employee.component.html',
  styleUrls: ['./admin-add-account-employee.component.css']
})
export class AdminAddAccountEmployeeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminAddAccCustomerComponent>,@Inject(MAT_DIALOG_DATA) public data: EmployeeInfo,private employeeService:EmployeeService,private notiService: SnackbarService,) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(addAccEmployeeForm : NgForm,employeeInfo:EmployeeInfo){

    if(addAccEmployeeForm.value.code != '' && addAccEmployeeForm.value.pass != ''){
    let employeeAcc = new EmployeeAcc(addAccEmployeeForm.value.code,addAccEmployeeForm.value.pass,2,true);
    this.employeeService.addOneAccEmployee(employeeAcc).subscribe((dataid => {
      if(dataid != null){
        this.employeeService.getDetailEmployebyID(employeeInfo.id).subscribe((employeeInfoDTO =>{
          console.log(employeeInfoDTO);
          employeeInfoDTO.id_acc = dataid;
        this.employeeService.UpdateEmployeeInfo(employeeInfoDTO).subscribe((data1 => {
          console.log("this is ok");
          this.onNoClick();
          this.notiService.openSnackBar("Thêm Data Thành Công!",'Đóng');
          this.employeeService.invokeRefreshTableFun();
        }));
        }))        
      }
    }));
  } else {
    this.notiService.openSnackBar("Vui Lòng Điền Đủ Thông Tin",'Đóng');
  }

  }

  ngOnInit(): void {
  }

}

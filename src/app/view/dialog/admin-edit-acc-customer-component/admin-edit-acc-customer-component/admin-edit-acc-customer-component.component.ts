import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerAcc } from 'src/app/model/CustomerAcc';

@Component({
  selector: 'app-admin-edit-acc-customer-component',
  templateUrl: './admin-edit-acc-customer-component.component.html',
  styleUrls: ['./admin-edit-acc-customer-component.component.css']
})
export class AdminEditAccCustomerComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminEditAccCustomerComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerInfo,private snackBar:SnackbarService
    ,private spinner:NgxSpinnerService,private customerService:CustomerService,private notiService: SnackbarService) { }
    
    onNoClick(): void {
      this.dialogRef.close();
    }
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
  
  ngOnInit(): void {
  }

  onSubmit(customerinfo:CustomerInfo,addAccCustomerForm:NgForm){
    this.spinner.show();
    if(addAccCustomerForm.value.code != '' && addAccCustomerForm.value.pass != ''){
      var acc = new CustomerAcc(customerinfo.id_account,addAccCustomerForm.value.code,addAccCustomerForm.value.pass,addAccCustomerForm.value.type);  
      this.customerService.updateOneAccCustomer(acc).subscribe((data => {
        if(data != null){
          this.snackBar.openSnackBar("Cập Nhật Thông Tin Khách Hàng Thành Công","Đóng");
          this.customerService.invokeRefreshTableFun();
          this.onNoClick();
        } else {
          this.snackBar.openSnackBar("Tài Khoản Khách Hàng Đã Tồn Tại","Đóng");
        }
        this.spinner.hide();
      }))
    }
  }

  
}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-admin-reset-password',
  templateUrl: './admin-reset-password.component.html',
  styleUrls: ['./admin-reset-password.component.css']
})
export class AdminResetPasswordComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public customerinfo: CustomerInfo,
  private snackbar:SnackbarService,
  private custSer:CustomerService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.spinner.show();
    this.custSer.resetPassCustomer(this.customerinfo).subscribe((data => {
      this.snackbar.openSnackBar("Đặt Lại Mật Khẩu Cho Khách Hàng "+this.customerinfo.code+" Thành Công !","Đóng");
      this.spinner.hide();
    }))
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { CommonService } from 'src/app/services/common/common.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer-add-info-dialog',
  templateUrl: './customer-add-info-dialog.component.html',
  styleUrls: ['./customer-add-info-dialog.component.css']
})
export class CustomerAddInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerAddInfoDialogComponent>, public snackbar: SnackbarService,private spinner:NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public customerInfo: CustomerInfo, private common: CommonService, private router: Router, private customerService: CustomerService, private notiService: SnackbarService) { }
  selectedDeal: Date;

  user = jwt_decode(this.common.getCookie('token_key'));

  

  genders = Array[2] = [
    { value: 1, viewValue: 'Nam' },
    { value: 0, viewValue: 'Nữ' },
  ];

  marital_statuss = Array[2] = [
    { value: 1, viewValue: 'Đã Kết Hôn' },
    { value: 0, viewValue: 'Chưa Kết Hôn' },
  ];

  public dateChanged(newDate: any) {
    this.customerInfo.birth_date = new Date(newDate);
  }

  ngOnInit(): void {
    this.customerInfo.types_identification = "Chứng Minh Thư";
  }
  listErrors = [];
  public onSubmit() {
    this.spinner.show();
    this.customerInfo.code_em_support = this.user['sub'];
    this.customerService.addCustomerInfo(this.customerInfo).subscribe((data => {
      this.customerService.invokeRefreshTableFun(); 
      this.spinner.hide();
    }))
  }
}



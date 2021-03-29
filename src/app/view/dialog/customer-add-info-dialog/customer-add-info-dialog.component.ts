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

  constructor(public dialogRef: MatDialogRef<CustomerAddInfoDialogComponent>, public snackbar: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public customerInfo: CustomerInfo, private common: CommonService, private router: Router, private customerService: CustomerService, private notiService: SnackbarService) { }
  selectedDeal: Date;

  user = jwt_decode(this.common.getCookie('token_key'));

  genders = Array[2] = [
    { value: 'true', viewValue: 'Nam' },
    { value: 'false', viewValue: 'Nữ' },
  ];

  marital_statuss = Array[2] = [
    { value: 'true', viewValue: 'Đã Kết Hôn' },
    { value: 'false', viewValue: 'Chưa Kết Hôn' },
  ];

  public dateChanged(newDate: any) {
    this.customerInfo.birth_date = new Date(newDate);
  }

  ngOnInit(): void {
  }
  listErrors = [];
  public onSubmit() {
    this.customerInfo.code_em_support = this.user['sub'];
    this.customerService.addCustomerInfo(this.customerInfo).subscribe((data => {
      this.customerService.invokeRefreshTableFun(); 
    }))
  }
}



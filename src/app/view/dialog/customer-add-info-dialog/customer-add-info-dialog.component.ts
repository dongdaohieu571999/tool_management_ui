import { Component, Inject, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { CommonService } from 'src/app/services/common/common.service';

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
    // this.customerInfo.code_em_support = this.user['sub'];
    // this.customerService.addCustomerInfo(this.customerInfo).subscribe((data => {
    //   this.customerService.invokeRefreshTableFun(); 
    // }))
    if (!this.customerInfo.company_name.match("[a-zA-Z/s]+]")) {
      this.listErrors.push("Tên không được chứa chữ số ");
    }
    if (!this.customerInfo.id_card.match("[0-9]+]")) {
      this.listErrors.push("Chứng minh thư không được chứa chữ cái ");
    }
    if (!this.customerInfo.email.match("^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$")) {
      this.listErrors.push("Email không đúng format ");
    }
    if (!this.customerInfo.phone_1.match("[0-9]+]")) {
      this.listErrors.push("Số điện thoại không được chứa chữ cái ");
    }
    if (!this.customerInfo.phone_2.match("[0-9]+]")) {
      this.listErrors.push("Số điện thoại không được chứa chữ cái ");
    }
    if (
      this.customerInfo.age == 0 &&
      this.customerInfo.birth_address == "" &&
      this.customerInfo.career == "" &&
      this.customerInfo.code == "" &&
      this.customerInfo.company_name == "" &&
      this.customerInfo.code_em_support == "" &&
      this.customerInfo.conadd_city == "" &&
      this.customerInfo.conadd_district == "" &&
      this.customerInfo.conadd_no_street == "" &&
      this.customerInfo.curadd_city == "" &&
      this.customerInfo.curadd_district == "" &&
      this.customerInfo.curadd_no_street == "" &&
      this.customerInfo.curadd_wards == "" &&
      this.customerInfo.email == "" &&
      this.customerInfo.full_name == "" &&
      this.customerInfo.gender == true ||
      this.customerInfo.gender == false &&
      this.customerInfo.id_card == "" &&
      this.customerInfo.job == "" &&
      this.customerInfo.main_business == "" &&
      this.customerInfo.marital_status == true ||
      this.customerInfo.marital_status == false &&
      this.customerInfo.monthly_income == 0 &&
      this.customerInfo.nation == "" &&
      this.customerInfo.nationality_1 == "" &&
      this.customerInfo.nationality_2 == "" &&
      this.customerInfo.occupation_group == "" &&
      this.customerInfo.peradd_city == "" &&
      this.customerInfo.peradd_district == "" &&
      this.customerInfo.peradd_no_street == "" &&
      this.customerInfo.peradd_wards == "" &&
      this.customerInfo.phone_1 == "" &&
      this.customerInfo.phone_2 == "" &&
      this.customerInfo.position == "" &&
      this.customerInfo.source == "" &&
      this.customerInfo.specific_work == "" &&
      this.customerInfo.types_identification == "" &&
      this.customerInfo.workadd_city == "" &&
      this.customerInfo.workadd_no_street == "" &&
      this.customerInfo.workadd_district == "" &&
      this.customerInfo.workadd_wards == ""
    ) {
      this.listErrors.push('Các trường không được để trống');
      this.snackbar.openSnackBar(this.listErrors.join(', '), 'Đóng');
    }

  }
}



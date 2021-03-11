import { Component, OnInit,Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
@Component({
  selector: 'app-customer-edit-info',
  templateUrl: './customer-edit-info.component.html',
  styleUrls: ['./customer-edit-info.component.css']
})

export class CustomerEditInfoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public customerInfo:any,private customerService:CustomerService,private snackbar: SnackbarService) { }
  selectedDeal:Date;
  genders= Array[2] = [
    {value: 'true', viewValue: 'Nam'},
    {value: 'false', viewValue: 'Nữ'},
  ];

  marital_statuss = Array[2] = [
    {value: 'true', viewValue: 'Đã Kết Hôn'},
    {value: 'false', viewValue: 'Chưa Kết Hôn'},
  ];

  public dateChanged(newDate:any){
    this.customerInfo.birth_date = new Date(newDate);
    
  }
  ngOnInit(): void {
    
  }

  

  

  public updateInfoCustomer(){
    this.customerService.updateCustomerInfo(this.customerInfo).subscribe(( data => {
      this.snackbar.openSnackBar('Cập Nhật Thành Công','Đóng');
    }))
  }

}

import { Component, OnInit,Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
@Component({
  selector: 'app-customer-edit-info',
  templateUrl: './customer-edit-info.component.html',
  styleUrls: ['./customer-edit-info.component.css']
})

export class CustomerEditInfoComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CustomerEditInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public customerInfo:any,private customerService:CustomerService,private snackbar: SnackbarService) { }
  selectedDeal:Date;
  genders= Array[2] = [
    {value: 1, viewValue: 'Nam'},
    {value: 0, viewValue: 'Nữ'},
  ];

  marital_statuss = Array[2] = [
    {value: 1, viewValue: 'Đã Kết Hôn'},
    {value: 0, viewValue: 'Chưa Kết Hôn'},
  ];

  public dateChanged(newDate:any){
    this.customerInfo.birth_date = new Date(newDate);
    
  }
  ngOnInit(): void {
    
  }


  public updateInfoCustomer(){
    this.customerService.updateCustomerInfo(this.customerInfo).subscribe(( data => {
      this.snackbar.openSnackBar('Cập Nhật Thành Công','Đóng');
      this.dialogRef.close();
    }))
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-customer-add-info-dialog',
  templateUrl: './customer-add-info-dialog.component.html',
  styleUrls: ['./customer-add-info-dialog.component.css']
})
export class CustomerAddInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerAddInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public customerInfo: CustomerInfo,private router: Router,private customerService:CustomerService,private notiService: SnackbarService) { }
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

public onSubmit(){
  this.customerService.addCustomerInfo(this.customerInfo).subscribe((data => {

    this.customerService.invokeRefreshTableFun();    

  }))
}

}

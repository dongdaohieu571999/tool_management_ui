import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerAcc } from 'src/app/model/CustomerAcc';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-admin-add-acc-customer',
  templateUrl: './admin-add-acc-customer.component.html',
  styleUrls: ['./admin-add-acc-customer.component.css']
})
export class AdminAddAccCustomerComponent implements OnInit {

  

  constructor(
    public dialogRef: MatDialogRef<AdminAddAccCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerInfo,private customerService:CustomerService,private notiService: SnackbarService) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(addAccCustomerForm : NgForm,customerInfo:CustomerInfo){
    if(addAccCustomerForm.value.code != '' && addAccCustomerForm.value.pass != ''){
    let customerAcc = new CustomerAcc(addAccCustomerForm.value.code,addAccCustomerForm.value.pass,true);
    this.customerService.addOneAccCustomer(customerAcc).subscribe((data => {
      if(data != null){
        customerInfo.id_account = data;
        console.log(customerInfo);
        this.customerService.updateCustomerInfo(customerInfo).subscribe((data1 => {
          console.log("this is ok");
          this.onNoClick();
          this.notiService.openSnackBar("Thêm Data Thành Công!",'Đóng');
          this.customerService.invokeRefreshTableFun();
        }));
      }
    }));
  } else {
    this.notiService.openSnackBar("Vui Lòng Điền Đủ Thông Tin",'Đóng');
  }
  }

  ngOnInit(): void {
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) public customerInfo: CustomerInfo,private customerService:CustomerService,private notiService: SnackbarService) { }

  ngOnInit(): void {
  }
public onSubmit(){
  this.customerService.addCustomerInfo(this.customerInfo).subscribe((data => {
    console.log(data);
    
  }))
}

}

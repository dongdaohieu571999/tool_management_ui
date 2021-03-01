import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerAcc } from 'src/app/model/CustomerAcc';

@Component({
  selector: 'app-admin-add-acc-customer',
  templateUrl: './admin-add-acc-customer.component.html',
  styleUrls: ['./admin-add-acc-customer.component.css']
})
export class AdminAddAccCustomerComponent implements OnInit {

  code:string;
  pass:string;
  confirmPass:string;

  constructor(
    public dialogRef: MatDialogRef<AdminAddAccCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerAcc) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    console.log();
  }

  ngOnInit(): void {
  }

}

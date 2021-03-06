import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerAddInfoDialogComponent } from '../dialog/customer-add-info-dialog/customer-add-info-dialog.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {

  status: boolean = false;
  
  

  customerInfo = new CustomerInfo(0,new Date(),0,'','','','','','','','','','','','','',0,0,0,0,0,'','','',0,'','','','','','','','','','','','','','','','','','',false,'',0,0,'',new Date(),false,new Date(),'');

  constructor(public dialog : MatDialog) { }
  
  ngOnInit(): void {
    
  }

  displayAddCustomerDialog(): void {
    this.status = !this.status;
  }

  public openDialog(){
    let dialogRef = this.dialog.open(CustomerAddInfoDialogComponent,{
      data:this.customerInfo
    });
    
    dialogRef.afterClosed().subscribe(result => {
    })
  }
}

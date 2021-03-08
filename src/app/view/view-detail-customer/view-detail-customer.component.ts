import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { EmployeeInfo } from 'src/app/model/EmployeeInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CustomerAddInfoDialogComponent } from 'src/app/view/dialog/customer-add-info-dialog/customer-add-info-dialog.component';
import { PauseCustomerDialogComponent } from 'src/app/view/dialog/pause-customer-dialog/pause-customer-dialog.component';

@Component({
  selector: 'app-view-detail-customer',
  templateUrl: './view-detail-customer.component.html',
  styleUrls: ['./view-detail-customer.component.css']
})
export class ViewDetailCustomerComponent implements OnInit {

  customerCode: string = "#1001";
  constructor(public dialog : MatDialog,public route : ActivatedRoute,public customerService : CustomerService) { }

  customerinfo : CustomerInfo;
  ngOnInit(): void {
    // let id = this.route.snapshot.params['id'];
    // this.customerService.getDetailCustomer(id).subscribe((data => {
    //   this.customerinfo = data;
    //   console.log(data);
    // }));

    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.customerService.getDetailCustomer(id).subscribe((data => {
        this.customerinfo = data;
        console.log(this.customerinfo);
      }));
  })     
}

  
  public openDialogEdit(){
    let dialogRef = this.dialog.open(CustomerAddInfoDialogComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
  public openDialogPause(){
    let dialogRef = this.dialog.open(PauseCustomerDialogComponent);
    this.getInfoOneCustomer();
  }

  public getInfoOneCustomer(){
    
  }
}

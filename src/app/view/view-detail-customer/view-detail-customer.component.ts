import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { EmployeeInfo } from 'src/app/model/EmployeeInfo';
import { CommonService } from 'src/app/services/common/common.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CustomerAddInfoDialogComponent } from 'src/app/view/dialog/customer-add-info-dialog/customer-add-info-dialog.component';
import { PauseCustomerDialogComponent } from 'src/app/view/dialog/pause-customer-dialog/pause-customer-dialog.component';
import { CustomerEditInfoComponent } from '../dialog/customer-edit-info/customer-edit-info.component';
import { ReportCustomerDialogComponent } from '../dialog/report-customer-dialog/report-customer-dialog.component';

@Component({
  selector: 'app-view-detail-customer',
  templateUrl: './view-detail-customer.component.html',
  styleUrls: ['./view-detail-customer.component.css']
})
export class ViewDetailCustomerComponent implements OnInit {

  constructor(private common : CommonService,private customerService: CustomerService,private activateRoute: ActivatedRoute,private dialog : MatDialog,private router:Router) { }

  customerInfo: CustomerInfo;


  
  ngOnInit(): void {
    // let id = this.route.snapshot.params['id'];
    // this.customerService.getDetailCustomer(id).subscribe((data => {
    //   this.customerinfo = data;
    //   console.log(data);
    // }));

  //   this.activateRoute.params.subscribe((params: Params) => {
  //     let id = params['id'];
  //     this.customerService.getOneAccCustomer(id).subscribe((data => {
  //       this.customerinfo = data;
  //       console.log(this.customerinfo);
  //     }));
  // })
  this.customerService.getOneAccCustomer(this.activateRoute.snapshot.params['id'],this.common.getCookie("token_key")).subscribe((data =>{
    this.customerInfo = data;
    console.log(data);
  }))
}
  
  public openDialogEdit(){
    let dialogRef = this.dialog.open(CustomerEditInfoComponent,{data : this.customerInfo} );
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
  public openDialogReport(){
    let dialogRef = this.dialog.open(ReportCustomerDialogComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
  
  public openDialogPause(){
    let dialogRef = this.dialog.open(PauseCustomerDialogComponent);
    this.getInfoOneCustomer();
  }

  public getInfoOneCustomer(){
    // this.activateRoute.queryParams.subscribe(params => {
    //   let id = params['id'];
    //   this.customerService.getOneAccCustomer(id).subscribe((data => {
    //     this.customerInfo = data;
    //   }));
    // });
    
  }
}

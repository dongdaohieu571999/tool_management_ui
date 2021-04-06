import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CommonService } from 'src/app/services/common/common.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { NgxSpinnerService } from 'ngx-spinner'
import { PauseCustomerDialogComponent } from 'src/app/view/dialog/pause-customer-dialog/pause-customer-dialog.component';
import { CustomerEditInfoComponent } from '../dialog/customer-edit-info/customer-edit-info.component';
import { ReportCustomerDialogComponent } from '../dialog/report-customer-dialog/report-customer-dialog.component';

@Component({
  selector: 'app-view-detail-customer',
  templateUrl: './view-detail-customer.component.html',
  styleUrls: ['./view-detail-customer.component.css']
})
export class ViewDetailCustomerComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService,private common : CommonService,private customerService: CustomerService,private activateRoute: ActivatedRoute,private dialog : MatDialog,private router:Router) { }

  customerInfo = new CustomerInfo(0,new Date(),0,'','','','','','','','','','','','','',0,0,0,0,0,'','','',0,'','','','','','','','','','','','','','','','','','',0,'',0,0,'',new Date(),0,new Date(),'',0);
  custInfoList:Array<CustomerInfo>;

  
  ngOnInit(): void {
    this.spinner.show();
    this.customerService.getOneCustomerInfo(this.activateRoute.snapshot.params['id'],this.common.getCookie("token_key")).subscribe((data =>{
    this.customerInfo = data[0];
    this.custInfoList = data;
    this.spinner.hide();
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

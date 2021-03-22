import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CommonService } from 'src/app/services/common/common.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CustomerEditInfoComponent } from 'src/app/view/dialog/customer-edit-info/customer-edit-info.component';

@Component({
  selector: 'app-view-detail-customer-admin',
  templateUrl: './view-detail-customer-admin.component.html',
  styleUrls: ['./view-detail-customer-admin.component.css']
})
export class ViewDetailCustomerAdminComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService,private common : CommonService,private customerService: CustomerService,private activateRoute: ActivatedRoute,private dialog : MatDialog,private router:Router ) { }

  customerInfo:CustomerInfo;
  ngOnInit(): void {
    this.spinner.show();
  this.customerService.getDetailCustomerInfoAdmin(this.activateRoute.snapshot.params['id']).subscribe((data =>{
    this.customerInfo = data;
    console.log(this.customerInfo);
    this.spinner.hide();
  }))
  }
  openDialogEdit(){
    let dialogRef = this.dialog.open(CustomerEditInfoComponent,{data : this.customerInfo} );
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
}

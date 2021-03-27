import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { NgxSpinnerService } from 'ngx-spinner'

import { MatDialog } from '@angular/material/dialog';
import { CustomerEditInfoComponent } from '../../dialog/customer-edit-info/customer-edit-info.component';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {

  constructor(private changeDetectorRefs: ChangeDetectorRef,private common:CommonService,private dialog : MatDialog,public customerService : CustomerService, private router : Router,private spinner:NgxSpinnerService) { 
    
  }
  customerinfos : Array<CustomerInfo>;
  page:number = 1;
  totalRecords:number;

  ngOnInit(): void {
      this.customerService.subsVar = this.customerService.    
      callRefreshTable.subscribe((name:string) => {
        this.refresh();
      });
    this.refresh();
  }

  public customerDetail(id:number){
    this.router.navigate(['customer-detail',id]);
  }

  public editDrafCustomerInfo(customerInfo : CustomerInfo){
    let dialogRef = this.dialog.open(CustomerEditInfoComponent,{data : customerInfo} );
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }

  public refresh(){
    this.spinner.show();
    this.customerService.getAllCustomerInfo(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data => {
         this.customerinfos = data;
         this.totalRecords = data.length;
         this.spinner.hide();
    }))
  }
}

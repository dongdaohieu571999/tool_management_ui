import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerAcc } from 'src/app/model/CustomerAcc';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { AdminAddAccCustomerComponent } from 'src/app/view/dialog/admin-add-acc-customer/admin-add-acc-customer.component'
import { CommonService } from 'src/app/services/common/common.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-view-customer-table',
  templateUrl: './view-customer-table.component.html',
  styleUrls: ['./view-customer-table.component.css']
})
export class ViewCustomerTableComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService,private customerService :CustomerService,private common: CommonService,public dialog: MatDialog,private router:Router) { }
  ngOnInit(): void {
    this.spinner.show();
    this.customerService.getAllCustomerInfoAdmin().subscribe((data => {
      this.data = data;
      this.totalRecords = data.length;
      console.log(jwt_decode(this.common.getCookie('token_key'))['sub']);
    })) 
    this.spinner.hide();
  }

  page:number = 1;
  data: Array<CustomerInfo>;
  totalRecords:number;

  status: boolean = false;
  
  public customerDetail(id:number){
    this.router.navigate(['customer-detail-admin',id]);
  }

  openDialog(i:number) {
    const dialogRef = this.dialog.open(AdminAddAccCustomerComponent,({
      data:this.data[i]
    }));

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  onSelectAcc(id:number){
    this.router.navigate(['customer-detail',id]);
  }
  
  
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerAcc } from 'src/app/model/CustomerAcc';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { AdminAddAccCustomerComponent } from 'src/app/view/dialog/admin-add-acc-customer/admin-add-acc-customer.component'


@Component({
  selector: 'app-view-customer-table',
  templateUrl: './view-customer-table.component.html',
  styleUrls: ['./view-customer-table.component.css']
})
export class ViewCustomerTableComponent implements OnInit {

  ngOnInit(): void {
    this.customerService.getAllCustomerInfo().subscribe((data => {
      this.data = data;
      this.totalRecords = data.length;
      console.log(data);
    }))
  }

  page:number = 1;
  data: Array<CustomerInfo>;
  totalRecords:number;

  status: boolean = false;
  constructor(private customerService :CustomerService,public dialog: MatDialog,private router:Router) { }

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

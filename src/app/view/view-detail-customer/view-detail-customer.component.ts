import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CustomerAddInfoDialogComponent } from 'src/app/view/dialog/customer-add-info-dialog/customer-add-info-dialog.component';
import { PauseCustomerDialogComponent } from 'src/app/view/dialog/pause-customer-dialog/pause-customer-dialog.component';

@Component({
  selector: 'app-view-detail-customer',
  templateUrl: './view-detail-customer.component.html',
  styleUrls: ['./view-detail-customer.component.css']
})
export class ViewDetailCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService,private activateRoute: ActivatedRoute) { }

  customerInfo: CustomerInfo;

  ngOnInit(): void {
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

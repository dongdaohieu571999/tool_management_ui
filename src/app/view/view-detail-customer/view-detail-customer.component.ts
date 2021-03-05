import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerAddInfoDialogComponent } from 'src/app/view/dialog/customer-add-info-dialog/customer-add-info-dialog.component';
import { PauseCustomerDialogComponent } from 'src/app/view/dialog/pause-customer-dialog/pause-customer-dialog.component';

@Component({
  selector: 'app-view-detail-customer',
  templateUrl: './view-detail-customer.component.html',
  styleUrls: ['./view-detail-customer.component.css']
})
export class ViewDetailCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getInfoOneCustomer();
  }

  public getInfoOneCustomer(){
    
  }
}

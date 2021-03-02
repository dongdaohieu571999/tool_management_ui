import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerAddInfoDialogComponent } from '../dialog/customer-add-info-dialog/customer-add-info-dialog.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  status: boolean = false;

  constructor(public dialog : MatDialog) { }
   
  ngOnInit(): void {
    
  }

  displayAddCustomerDialog(): void {
    this.status = !this.status;
  }

  public openDialog(){
    let dialogRef = this.dialog.open(CustomerAddInfoDialogComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
}

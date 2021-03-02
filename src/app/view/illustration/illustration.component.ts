import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerIllustrationDialogComponent } from '../dialog/add-customer-illustration-dialog/add-customer-illustration-dialog.component';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.css']
})
export class IllustrationComponent implements OnInit {

  status: boolean = false;

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  displayAddCustomerDialog(): void {
    this.status = !this.status;
  }
  
  public openDialog(){
    let dialogRef = this.dialog.open(AddCustomerIllustrationDialogComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }


}

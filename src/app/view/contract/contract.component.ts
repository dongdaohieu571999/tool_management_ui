import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContractAddDialogComponent } from '../dialog/contract-add-dialog/contract-add-dialog.component';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  status: boolean = false;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  displayAddContractDialog(): void {
    this.status = !this.status;
  }

  public openDialog(){
    let dialogRef = this.dialog.open(ContractAddDialogComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
}

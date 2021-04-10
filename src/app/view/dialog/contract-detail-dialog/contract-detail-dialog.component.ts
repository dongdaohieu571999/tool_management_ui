import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contract } from 'src/app/model/Contract';
import { Referencetable } from 'src/app/model/Referencetable';
import { RefertableService } from 'src/app/services/refertable/refertable.service';

@Component({
  selector: 'app-contract-detail-dialog',
  templateUrl: './contract-detail-dialog.component.html',
  styleUrls: ['./contract-detail-dialog.component.css']
})
export class ContractDetailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public contracts:Contract,
  public dialogRef: MatDialogRef<ContractDetailDialogComponent>,private referTable:RefertableService ) { }

  ref:Referencetable;
  payment_period:string;
  ngOnInit(): void {
    this.referTable.getAllReference().subscribe((data => {
      this.ref=data;
      this.payment_period = this.ref.multiplierForPaymentPeriod.find(i => i.priod_id = this.contracts.payment_period_id)['description'];    
    }))
  }

}

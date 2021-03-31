import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Contract } from 'src/app/model/Contract';
import { ContractChangeHistory } from 'src/app/model/ContractChangeHistory';
import { ContractDTO } from 'src/app/model/ContractDTO';
import { FeePaymentHistory } from 'src/app/model/FeePaymentHistory';
import { IntersetPaymentHistory } from 'src/app/model/IntersetPaymentHistory';
import { Referencetable } from 'src/app/model/Referencetable';
import { AuthenService } from 'src/app/services/authen/authen.service';
import { ContractService } from 'src/app/services/contract/contract.service';
import { RefertableService } from 'src/app/services/refertable/refertable.service';
import { AddRequestComponent } from '../dialog/add-request/add-request/add-request.component';
import { ContractChangeInfoDialogComponent } from '../dialog/contract-change-info-dialog/contract-change-info-dialog.component';
import { ContractPauseDialogComponent } from '../dialog/contract-pause-dialog/contract-pause-dialog.component';

@Component({
  selector: 'app-view-detail-contract',
  templateUrl: './view-detail-contract.component.html',
  styleUrls: ['./view-detail-contract.component.css']
})
export class ViewDetailContractComponent implements OnInit {

  id:number;
  ref:Referencetable;
  payment_period:string;
  contracts:Contract;
  contractchanges:Array<ContractChangeHistory>;

  constructor(private spinner:NgxSpinnerService,private referTable:RefertableService,public authenService: AuthenService,private  route : ActivatedRoute , private router : Router,private contractService : ContractService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.contractService.subsVar = this.contractService.    
      callRefreshTable.subscribe((name:string) => {
        this.refresh();
      });
    this.refresh();
  }

  public contractChangeDetail(id:number){
    this.router.navigate(['detai-history-change',id]);
  }
  public openDialogChange(){
    let dialogRef = this.dialog.open(ContractChangeInfoDialogComponent,{data:this.contracts});
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
  openDialogSendRequest(){
    let dialogRef = this.dialog.open(AddRequestComponent,{data:this.contracts});
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
  public openDialogPause(){
    let dialogRef = this.dialog.open(ContractPauseDialogComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }

  public refresh(){
    this.spinner.show();
    this.id = this.route.snapshot.params['id'];
    this.contractService.getDetailContract(this.id).subscribe((data =>{
      this.contracts = data;
      this.referTable.getAllReference().subscribe((data => {
        this.ref=data;
        this.payment_period = this.ref.multiplierForPaymentPeriod.find(i => i.priod_id = this.contracts.payment_period_id)['description'];
        this.spinner.hide();
      }))
    }))

    this.contractService.getAllContractChangeHistory(this.id).subscribe((data => {
      this.contractchanges = data;
    }))
  }
}

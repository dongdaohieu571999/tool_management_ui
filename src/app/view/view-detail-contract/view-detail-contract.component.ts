import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from 'src/app/model/Contract';
import { ContractChangeHistory } from 'src/app/model/ContractChangeHistory';
import { ContractDTO } from 'src/app/model/ContractDTO';
import { FeePaymentHistory } from 'src/app/model/FeePaymentHistory';
import { IntersetPaymentHistory } from 'src/app/model/IntersetPaymentHistory';
import { AuthenService } from 'src/app/services/authen/authen.service';
import { ContractService } from 'src/app/services/contract/contract.service';
import { ContractChangeInfoDialogComponent } from '../dialog/contract-change-info-dialog/contract-change-info-dialog.component';
import { ContractPauseDialogComponent } from '../dialog/contract-pause-dialog/contract-pause-dialog.component';

@Component({
  selector: 'app-view-detail-contract',
  templateUrl: './view-detail-contract.component.html',
  styleUrls: ['./view-detail-contract.component.css']
})
export class ViewDetailContractComponent implements OnInit {

  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700], label: 'Account A' },
  ];
  chartLabels = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];

  id:number;
  contract:ContractDTO;
  intersetpayments:IntersetPaymentHistory;
  feepayments:FeePaymentHistory;
  contractchanges:ContractChangeHistory;

  constructor(public authenService: AuthenService,private  route : ActivatedRoute , private router : Router,private contractService : ContractService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.contract = new ContractDTO();
    this.id = this.route.snapshot.params['id'];
    this.contractService.getDetailContract(this.id).subscribe((data =>{
      this.contract = data;
      console.log(this.contract);
    }))

    this.feepayments = new FeePaymentHistory();
    this.contractService.getAllFeePaymentHistory(this.route.snapshot.params['id']).subscribe((data => {
      this.feepayments = data;
      console.log(this.feepayments);
      console.log("feepayment");
    }))

    this.contractchanges = new ContractChangeHistory();
    this.contractService.getAllContractChangeHistory(this.route.snapshot.params['id']).subscribe((data => {
      this.contractchanges = data;
      console.log(this.contractchanges);
      console.log("contractchange");
    }))

    this.intersetpayments = new IntersetPaymentHistory();
    this.contractService.getAllIntersetPaymentHistory(this.route.snapshot.params['id']).subscribe((data => {
      this.intersetpayments = data;
      console.log(this.intersetpayments);
      console.log("intersetpayment");
    }))

  }

  public contractChangeDetail(id:number){
    this.router.navigate(['detai-history-change',id]);
  }
  public openDialogChange(){
    let dialogRef = this.dialog.open(ContractChangeInfoDialogComponent,{data:this.contract});
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
  public openDialogPause(){
    let dialogRef = this.dialog.open(ContractPauseDialogComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
}

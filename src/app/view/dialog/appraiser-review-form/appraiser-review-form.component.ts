import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailContractRequest } from 'src/app/model/DetailContractRequest';
import { ContractService } from 'src/app/services/contract/contract.service';

@Component({
  selector: 'app-appraiser-review-form',
  templateUrl: './appraiser-review-form.component.html',
  styleUrls: ['./appraiser-review-form.component.css']
})
export class AppraiserReviewFormComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public detailContractRequest:DetailContractRequest,
    public dialogRef: MatDialogRef<AppraiserReviewFormComponent>,public contractService : ContractService,private router:Router) { }
    description:String;
  ngOnInit(): void {
  }
 approveStatus:String;
 Review(){
   if(this.approveStatus == "Chấp Nhận"){
    this.contractService.setStatusContract(this.detailContractRequest.id_contract,this.detailContractRequest.id_request,this.description).subscribe((data =>{
      console.log(data);
      this.CloseReview();
      this.router.navigate(['appraiser-request-manage']);
    }))
   }
   if(this.approveStatus == "Từ chối"){
    this.contractService.setStatusContractDecline(this.detailContractRequest.id_contract,this.detailContractRequest.id_request,this.description).subscribe((data =>{
      console.log(data);
      this.CloseReview();
      this.router.navigate(['appraiser-request-manage']);
    }))
   }
 }
 CloseReview(){
  this.dialogRef.close(); 
 }
}

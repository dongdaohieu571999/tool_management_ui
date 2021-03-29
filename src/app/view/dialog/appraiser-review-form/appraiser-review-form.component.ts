import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Request } from 'src/app/model/Request';
import { ContractService } from 'src/app/services/contract/contract.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-appraiser-review-form',
  templateUrl: './appraiser-review-form.component.html',
  styleUrls: ['./appraiser-review-form.component.css']
})
export class AppraiserReviewFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) 
    public req: Request,public contractService : ContractService,private snackBar:SnackbarService,private spinner:NgxSpinnerService,private router:Router) { }
    description:String;
  ngOnInit(): void {
  }
 approveStatus:string;
 Review(){
   this.spinner.show();
   if(this.approveStatus == "DD"){
    this.contractService.setStatusContract(this.req.id_contract,this.req.id,this.description,this.approveStatus).subscribe((data =>{
      this.spinner.hide();
      this.snackBar.openSnackBar("Xử Lý Yêu Cầu Thành Công","Đóng");
      this.router.navigate(['appraiser-request-manage']);
    }))
   }
   else{
    this.contractService.setStatusContract(this.req.id_contract,this.req.id,this.description,this.approveStatus).subscribe((data =>{
      this.spinner.hide();
      this.snackBar.openSnackBar("Xử Lý Yêu Cầu Thành Công","Đóng");
      this.router.navigate(['appraiser-request-manage']);
    }))
   }
 }
}

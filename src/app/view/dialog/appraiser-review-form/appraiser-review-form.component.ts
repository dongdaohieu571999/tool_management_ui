import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Contract } from 'src/app/model/Contract';
import { Illustration } from 'src/app/model/Illustration';
import { Request } from 'src/app/model/Request';
import { Revenue } from 'src/app/model/Revenue';
import { ContractService } from 'src/app/services/contract/contract.service';
import { DetailCommissonService } from 'src/app/services/detailCommisson/detail-commisson.service';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import jwt_decode from "jwt-decode";
import { CommonService } from 'src/app/services/common/common.service';
import { RevenueService } from 'src/app/services/revenue/revenue.service';

@Component({
  selector: 'app-appraiser-review-form',
  templateUrl: './appraiser-review-form.component.html',
  styleUrls: ['./appraiser-review-form.component.css']
})
export class AppraiserReviewFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) 
    public req: Request,public contractService : ContractService,private revenueSer:RevenueService,private common:CommonService,private commissionSer:DetailCommissonService,private illustSer:IllustrationService,private snackBar:SnackbarService,private spinner:NgxSpinnerService,private router:Router) { }
    description:String;
  ngOnInit(): void {
  }
  revenue=new Revenue(0,'',0,0,0,new Date());
  illustration:Illustration;
 approveStatus:string;
 Review(){
   this.spinner.show();
   if(this.approveStatus == "DD"){
    this.contractService.setStatusContract(this.req.id_contract,this.req.id,this.description,this.approveStatus).subscribe((data =>{
      this.contractService.getDetailContract(this.req.id_contract).subscribe((data => {
        this.illustSer.getIllustrationContractCreate(data['id_illustration']).subscribe((data => {
          this.illustration = data;
          let dataCommission = {payment_period_id:data['payment_period_id'],
          denomination:data['illustrationMainInterest'].denominations}
          this.commissionSer.getOneCommisson(dataCommission).subscribe((data => {
            this.revenue.id_contract = this.req.id_contract;
            this.revenue.code_employee = this.req.code_sender;
            this.revenue.income = data['commission'] * this.illustration.total_fee;
            if(this.illustration.illustrationMainInterest.denominations != 0){
              if(this.illustration.illustrationSubInterestList != null){
                this.revenue.revenue_val = this.revenue.revenue_val+this.illustration.illustrationMainInterest.denominations;
                this.illustration.illustrationSubInterestList.forEach(a => this.revenue.revenue_val += a.denominations)
              } else {
                this.revenue.revenue_val = this.illustration.illustrationMainInterest.denominations;
              }
              
            }else {
              this.revenue.revenue_val = 0;
            }
            this.revenueSer.addOneRevenue(this.revenue).subscribe((data => {
              this.spinner.hide();
              this.snackBar.openSnackBar("Xử Lý Yêu Cầu Thành Công","Đóng");
              this.router.navigate(['appraiser-request-manage']);
            }))
          }))
        }))
      }))
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

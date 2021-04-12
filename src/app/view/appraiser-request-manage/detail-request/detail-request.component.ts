import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Contract } from 'src/app/model/Contract';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { Request } from 'src/app/model/Request';
import { CommonService } from 'src/app/services/common/common.service';
import { ContractService } from 'src/app/services/contract/contract.service';
import { ContractrequestService } from 'src/app/services/contractRequest/contractrequest.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { AppraiserReviewFormComponent } from '../../dialog/appraiser-review-form/appraiser-review-form.component';
import { ContractDetailDialogComponent } from '../../dialog/contract-detail-dialog/contract-detail-dialog.component';
import { IllustrationDetailDialogComponent } from '../../dialog/illustration-detail-dialog/illustration-detail-dialog.component';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.component.html',
  styleUrls: ['./detail-request.component.css']
})
export class DetailRequestComponent implements OnInit {

  status: boolean = false;
  req:Request;
  contract:Contract;
  custInfo:Array<CustomerInfo>;
  constructor(private common:CommonService,private custService:CustomerService,private contractService:ContractService,private dialog : MatDialog,private contractRequestService:ContractrequestService,private activateRoute:ActivatedRoute) { }



  ngOnInit(): void {
    this.contractRequestService.getOneContractRequest(this.activateRoute.snapshot.params['id']).subscribe((data =>{
      this.req = data;
      let data1 = {id:this.req.id_contract,code:this.req.code_sender}
      this.contractService.getDetailContract(data1).subscribe((data1 => {
        this.contract = data1;
        this.custService.getDetailCustomerInfoAdmin(this.contract.id_customer).subscribe((data2 => {
          this.custInfo = data2;
        }))
      }))
  }))
      
}

  displayConfirmDialog(): void {
   let dialogRef = this.dialog.open(AppraiserReviewFormComponent,{data:this.req});
   dialogRef.afterClosed().subscribe(result => {
     
   })
  }

  contractDetail : Contract;
  public openDialogContractDetail(id_contract:number){
    let data = {id:id_contract,code:jwt_decode(this.common.getCookie('token_key'))['sub']}
    this.contractService.getDetailContract(data).subscribe((dataReturn =>{
      this.contractDetail = dataReturn;
      let dialogRef = this.dialog.open(ContractDetailDialogComponent,{
        data:this.contract
      });
    }))
  }
  openillustrationDetailDialog(id_illustration:number){
    let dialogRef = this.dialog.open(IllustrationDetailDialogComponent,{data:id_illustration});
  }
}

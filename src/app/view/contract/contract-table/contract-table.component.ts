import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractDTO } from 'src/app/model/ContractDTO';
import { ContractService } from 'src/app/services/contract/contract.service';
import { NgxSpinnerService } from 'ngx-spinner';
import jwt_decode from "jwt-decode";
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css']
})
export class ContractTableComponent implements OnInit {

  constructor(private common:CommonService,private spinner:NgxSpinnerService,private contractService:ContractService,private router:Router) { }

  page:number = 1;
  totalRecords:number;
  contracts : Array<ContractDTO>;
  ngOnInit(): void {
    this.contractService.subsVar = this.contractService.
      callRefreshTable.subscribe((name:string) => {
        this.refresh();
      });
    this.refresh();
  }

  public contractDetail(id:number){
    this.router.navigate(['contract-detail',id]);
  }

  public refresh(){
    this.spinner.show();
    this.contractService.getAllContract(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data =>{
      this.contracts = data;
      this.totalRecords = this.contracts.length;
      this.spinner.hide();
    }))
  }
}

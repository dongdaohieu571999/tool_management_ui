import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractDTO } from 'src/app/model/ContractDTO';
import { ContractService } from 'src/app/services/contract/contract.service';
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css']
})
export class ContractTableComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private contractService:ContractService,private router:Router) { }

  contracts : Array<ContractDTO>;
  ngOnInit(): void {
    this.spinner.show();
    this.contractService.getAllContract().subscribe((data =>{
      this.contracts = data;
      this.spinner.hide();
    }))
  }

  public contractDetail(id:number){
    this.router.navigate(['contract-detail',id]);
  }
}

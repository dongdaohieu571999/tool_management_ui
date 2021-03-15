import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract/contract.service';
import { NgxSpinnerService } from 'ngx-spinner'
import { ContractInContractListDTO } from 'src/app/model/ContractInContractListDTO';

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css']
})
export class ContractTableComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService, private contractService:ContractService, private router:Router) { }

  contracts : Array<ContractInContractListDTO>;

  ngOnInit(): void {
    this.spinner.show();
    this.contractService.getAllContract().subscribe((data =>{
      this.contracts = data;
      this.spinner.hide();
      console.log(data);
    }))
  }

  public contractDetail(id:number){
    this.contractService.setContractId(id);
    this.router.navigate(['contract-detail']);
  }
}

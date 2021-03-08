import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractDTO } from 'src/app/model/ContractDTO';
import { ContractService } from 'src/app/services/contract/contract.service';

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css']
})
export class ContractTableComponent implements OnInit {

  constructor(private contractService:ContractService,private router:Router) { }

  contracts : Array<ContractDTO>;
  ngOnInit(): void {
    this.contractService.getAllContract().subscribe((data =>{
      this.contracts = data;
      console.log(data);
    }))
  }

  public contractDetail(id:number){
    this.router.navigate(['contract-detail',id]);
  }
}

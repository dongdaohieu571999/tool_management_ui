import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractDTO } from 'src/app/model/ContractDTO';
import { ContractInContractListDTO } from 'src/app/model/ContractInContractListDTO';
import { ContractService } from 'src/app/services/contract/contract.service';

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
  // contract:ContractDTO;
  contract: ContractInContractListDTO;
  constructor(private route : ActivatedRoute , private router : Router,private contractService : ContractService) { }

  ngOnInit(): void {
    this.contractService.getDetailContract().subscribe((data =>{
      this.contract = data;
      console.log(data);
    }))
  }

}

import { Component, OnInit } from '@angular/core';
import { Revenue } from 'src/app/model/Revenue';
import { CommonService } from 'src/app/services/common/common.service';
import { RevenueService } from 'src/app/services/revenue/revenue.service';
import jwt_decode from "jwt-decode";
import { ContractService } from 'src/app/services/contract/contract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  constructor(private router:Router,private revenueService:RevenueService,private common : CommonService,private contractService: ContractService) { }
listRevenueEmployee : Array<Revenue> = [];
listRevenueEmployeeMonthBefore : Array<Revenue> = [];
listRevenueEmployeeYearBefore : Array<Revenue> = [];
listRevenueEmployeeYearBeforeBig: Array<any> = [];
monthRevenueList : Array<number> = [];
RevenueLastMonth : number = 0;
ContractCount : number = 0;
dateNow:Date = new Date(); 
month:number = this.dateNow.getMonth()+1;
year:number = this.dateNow.getFullYear();
page: number = 1;
totalRecords: number;



  ngOnInit(): void {
    this.common.titlePage = "Theo Dõi Doanh Thu";
    this.contractService.getAllCountContract(jwt_decode(this.common.getCookie('token_key'))['sub'],this.month).subscribe((data =>{
      this.ContractCount = data;
    }))
    this.revenueService.getAllRevenue(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data =>{
      this.listRevenueEmployee = data;
      this.totalRecords = this.listRevenueEmployee.length;
    }))
    this.revenueService.getAllRevenueMonthBefore(jwt_decode(this.common.getCookie('token_key'))['sub'],this.month,this.year).subscribe((data =>{
      this.listRevenueEmployeeMonthBefore = data;
      console.log("danh sach thang truoc");
      console.log(this.listRevenueEmployeeMonthBefore);
        for (let i = 0; i < this.listRevenueEmployeeMonthBefore.length; i++) {        
         this.RevenueLastMonth+=this.listRevenueEmployeeMonthBefore[i].income;
        }
    }))
    this.revenueService.getAllRevenueYearBefore(jwt_decode(this.common.getCookie('token_key'))['sub'],this.year).subscribe((data =>{
      this.listRevenueEmployeeYearBefore = data;
     
      for (let i = 1; i < 13; i++) {
        let sumRevenue:number = 0;
        for (let j = 0; j < this.listRevenueEmployeeYearBefore.length; j++) {
          if(new Date(this.listRevenueEmployeeYearBefore[j].create_time).getMonth()+1 == i){
           sumRevenue += this.listRevenueEmployeeYearBefore[j].income;
          }          
        }
        this.monthRevenueList.push(sumRevenue);
      }
    }))
  }
  public IncomeDetailLastYear(month:number){
    this.router.navigate(['employee-detail-income',month]);
  }
}



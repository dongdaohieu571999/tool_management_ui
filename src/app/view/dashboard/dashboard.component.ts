import { Component, OnInit } from '@angular/core';
import { RevenueService } from 'src/app/services/revenue/revenue.service';
import jwt_decode from "jwt-decode";
import { CommonService } from 'src/app/services/common/common.service';
import { Revenue } from 'src/app/model/Revenue';
import { ContractService } from 'src/app/services/contract/contract.service';
import { Contract } from 'src/app/model/Contract';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartOptions = {
    responsive: true
  };
  // chartData = [
  //   { data: [330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700], label: 'Account A' },
  // ];
  chartData = [];

  public chartColors: Array<any> = [
    {
      // first color
      backgroundColor: 'rgb(255,255,255)',
      borderColor: 'rgb(255,255,255)',
      // pointBackgroundColor: 'rgba(225,10,24,0.2)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(225,10,24,0.2)',
    }
  ];
  chartLabels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

  constructor(private revenueService: RevenueService, private common: CommonService, private contractService: ContractService) { }
  dateNow: Date = new Date();
  month: number = this.dateNow.getMonth() + 1;
  year: number = this.dateNow.getFullYear() + 1;
  listRevenueEmployeeYearBefore: Array<Revenue> = [];
  listContract: Array<Contract> = [];
  monthRevenueList: Array<number> = [];
  ContractApproved: number = 0;
  ContractNotApproved: number = 0;
  RevenueLastMonth: number = 0;
  RevenueThisMonth: number = 0;
  listRevenueEmployeeMonthBefore: Array<Revenue> = [];
  listRevenueEmployeeMonthNow: Array<Revenue> = [];
  percentBetweenRevenue : String;

  ngOnInit(): void {
    // this.revenueService.getAllRevenueYearBefore(jwt_decode(this.common.getCookie('token_key'))['sub'],this.year).subscribe((data =>{

    // }))
    this.revenueService.getAllRevenueYearBefore(jwt_decode(this.common.getCookie('token_key'))['sub'], this.year).subscribe((data => {
      this.listRevenueEmployeeYearBefore = data;

      for (let i = 1; i < 13; i++) {
        let sumRevenue: number = 0;
        for (let j = 0; j < this.listRevenueEmployeeYearBefore.length; j++) {
          if (new Date(this.listRevenueEmployeeYearBefore[j].create_time).getMonth() + 1 == i) {
            sumRevenue += this.listRevenueEmployeeYearBefore[j].income;
          }
        }
        this.monthRevenueList.push(sumRevenue);
      }
      this.chartData = [
        { data: [this.monthRevenueList[0], this.monthRevenueList[1], this.monthRevenueList[2], this.monthRevenueList[3], this.monthRevenueList[4], this.monthRevenueList[5], this.monthRevenueList[6], this.monthRevenueList[7], this.monthRevenueList[8], this.monthRevenueList[9], this.monthRevenueList[10], this.monthRevenueList[11]], label: 'Account A' },
      ];
    }))
    
    this.contractService.getAllContract(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data => {
      this.listContract = data;
      for (let i = 0; i < this.listContract.length; i++) {
        if (this.listContract[i].approval_status == "CXD") {
          this.ContractNotApproved += 1;
        }
        if (this.listContract[i].approval_status == "DXD") {
          this.ContractApproved += 1;
        }
      }
    }))

    this.revenueService.getAllRevenueMonthBefore(jwt_decode(this.common.getCookie('token_key'))['sub'], this.month, this.year-1).subscribe((data => {
      this.listRevenueEmployeeMonthBefore = data;
      console.log("danh sach thang truoc");
      console.log(this.listRevenueEmployeeMonthBefore);
      for (let i = 0; i < this.listRevenueEmployeeMonthBefore.length; i++) {
        this.RevenueLastMonth += this.listRevenueEmployeeMonthBefore[i].income;
      }

      this.revenueService.getAllRevenueMonthBefore(jwt_decode(this.common.getCookie('token_key'))['sub'], this.month + 1, this.year-1).subscribe((data => {
        this.listRevenueEmployeeMonthNow = data;
        console.log("danh sach thang nay");
        console.log(this.listRevenueEmployeeMonthNow);
        for (let i = 0; i < this.listRevenueEmployeeMonthNow.length; i++) {
          this.RevenueThisMonth += this.listRevenueEmployeeMonthNow[i].income;
        }
      }))
      this.percentBetweenRevenue = ((this.RevenueThisMonth/this.RevenueLastMonth)*100).toString()+"%";
      console.log(this.RevenueLastMonth);
    }))
   

  }

}

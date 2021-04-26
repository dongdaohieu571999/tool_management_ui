import { Component, OnInit } from '@angular/core';
import { RevenueService } from 'src/app/services/revenue/revenue.service';
import jwt_decode from "jwt-decode";
import { CommonService } from 'src/app/services/common/common.service';
import { Revenue } from 'src/app/model/Revenue';
import { ContractService } from 'src/app/services/contract/contract.service';
import { Contract } from 'src/app/model/Contract';
import { assertInteger } from 'pdf-lib';
import { Router } from '@angular/router';
import { Income } from 'src/app/model/Income';
import { element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartOptions = {
    responsive: true
  };
  chartData = [];

  public chartColors: Array<any> = [
    {
      // first color
      backgroundColor: 'rgb(255,59,59)',
      borderColor: 'rgb(255,255,255)'
    }
  ];
  chartLabels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

  constructor(private router:Router,private revenueService: RevenueService, private common: CommonService, private contractService: ContractService) { }
// danh sách này để hiển thị
listIncomePredic = Array<itemIncomePredic>();
// danh sách thu nhập trong năm nay bao gồm các thu nhập dự đoán trước, danh sách này lấy từ API
listIncome : Array<Income> = [];

  dateNow: Date = new Date();
  month: number = this.dateNow.getMonth() + 1;
  year: number = this.dateNow.getFullYear();
  listRevenueEmployeeYearBefore: Array<Revenue> = [];
  listContract: Array<Contract> = [];
  monthRevenueList: Array<number> = [];
  ContractApproved: number = 0;
  ContractNotApproved: number = 0;
  IncomeLastMonth: number = 0;
  IncomeThisMonth: number = 0;
  listRevenueEmployeeMonthBefore: Array<Revenue> = [];
  listRevenueEmployeeMonthNow: Array<Revenue> = [];
  percentBetweenIncome : String;
  incomeStatus : String;

  ngOnInit(): void {
    this.common.titlePage = "Tổng Quan";
    this.CalculateIncomeForThisYear();
    
    this.contractService.getAllContract(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data => {
      this.listContract = data;
      for (let i = 0; i < this.listContract.length; i++) {
        if (this.listContract[i].approval_status == "DXD") {
          this.ContractNotApproved += 1;
        }
        if (this.listContract[i].approval_status == "DD") {
          this.ContractApproved += 1;
        }
      }
    }))

    // this.revenueService.getAllRevenueMonthBefore(jwt_decode(this.common.getCookie('token_key'))['sub'], this.month, this.year-1).subscribe((data => {      
    //   this.listRevenueEmployeeMonthBefore = data;
    //   if(this.listRevenueEmployeeMonthBefore.length == 0){
    //     return;
    //   }
    //   console.log("danh sach thang truoc");
    //   console.log(this.listRevenueEmployeeMonthBefore);
    //   for (let i = 0; i < this.listRevenueEmployeeMonthBefore.length; i++) {
    //     this.IncomeLastMonth += this.listRevenueEmployeeMonthBefore[i].income;
       
    //   }
     
      
    //   this.revenueService.getAllRevenueMonthBefore(jwt_decode(this.common.getCookie('token_key'))['sub'], this.month + 1, this.year-1).subscribe((data => {
    //     this.listRevenueEmployeeMonthNow = data;
    //     if(this.listRevenueEmployeeMonthNow.length == 0){
    //       return;
    //     }
    //     for (let i = 0; i < this.listRevenueEmployeeMonthNow.length; i++) {
    //       this.IncomeThisMonth += this.listRevenueEmployeeMonthNow[i].income;
    //     }
    //     if(this.IncomeThisMonth > this.IncomeLastMonth){
    //       this.incomeStatus = 'Tăng';
    //     }
    //     else{
    //       this.incomeStatus = 'Giảm';
    //     }
    //     if(this.incomeStatus == "Tăng"){
    //       this.percentBetweenIncome = Math.round(((this.IncomeLastMonth/this.IncomeThisMonth)*100)).toString()+"%";
    //     }
    //     else{
    //       this.percentBetweenIncome = Math.round(((this.IncomeThisMonth/this.IncomeLastMonth)*100)).toString()+"%";
    //     }
      
    //   }))
    // }))
   

  }
ContractPage(){
  this.router.navigate["contract"];
}
RevenuePage(){
  this.router.navigate["income"];
}

CalculateIncomeForThisYear(){
  for(let i=0;i<12;i++){
    let incomePredic = new itemIncomePredic(i+1,0,0);
    this.listIncomePredic.push(incomePredic);
  }
  this.revenueService.getAllIncomeSaler(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data => {
    this.listIncome = data;
    this.listIncome.forEach(item => {
      //Bước 1: cộng income vào tháng mà hợp đồng này được xét duyệt
      let time = (new Date(item.create_time)).getMonth() + 1;// thời gian mà hợp đòng được xét duyệt
      this.listIncomePredic[time-1].income += item.income;
      this.listIncomePredic[time-1].revenue += item.revenue_val;

      //Bước 2: Tính Income cho các tháng tiếp theo trong năm đó
      var startTime = new Date(item.start_time);// tháng mà khach hàng bắt đầu ký hợp đồng và trao tiền
      var desTime = new Date((new Date(item.start_time)).setFullYear(startTime.getFullYear() + 1)); // thời gian 1 năm đầu tiên của hợp đồng tính từ ngày đầu tiên
      var nextTime = new Date((new Date(item.start_time)).setMonth(startTime.getMonth()+this.transformPeriod(item.description)))
      while(true){
        if(nextTime.getFullYear() > this.year) break;
        else if(nextTime.getFullYear() == this.year){
          this.listIncomePredic.forEach(element => {
            if(element.month == (nextTime.getMonth() + 1)){
              if(nextTime > startTime && nextTime <= desTime){ // nếu là các năm tiếp theo thì income giảm 5 lần còn trong năm đầu tiên thì giữ nguyên income
                
                element.income += item.income;
              } else {
                element.income += item.income / 5;
              }
                element.revenue += item.revenue_val;
            }
          })
        }
        nextTime.setMonth(nextTime.getMonth()+this.transformPeriod(item.description));
      }
    })
    this.chartData = [
      { data: [this.listIncomePredic[0].income,this.listIncomePredic[1].income,
        this.listIncomePredic[2].income,this.listIncomePredic[3].income,
        this.listIncomePredic[4].income,this.listIncomePredic[5].income,
        this.listIncomePredic[6].income,this.listIncomePredic[7].income,
        this.listIncomePredic[8].income,this.listIncomePredic[9].income,
        this.listIncomePredic[10].income,this.listIncomePredic[11].income], label: 'Thu Nhập Trong 12 Tháng Năm '+this.year },
    ];
  }))
}

transformPeriod(data:any){
  switch(data){
    case ("Năm"):{
      return 12;
    } case("Nửa Năm"):{
      return 6;
    } case("Quý"):{
      return 3;
    } case("Tháng"):{
      return 1;
    }
  }
}

}

class itemIncomePredic{
  month:number;
  income:number;
  revenue:number;

  constructor(
    month:number,
  income:number,
  revenue:number
  ){
    this.month = month;
    this.income = income;
    this.revenue = revenue;
  }
  
  
}

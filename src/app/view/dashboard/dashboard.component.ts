import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700], label: 'Account A' },
  ];

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
  chartLabels = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-detail-employee',
  templateUrl: './view-detail-employee.component.html',
  styleUrls: ['./view-detail-employee.component.css']
})
export class ViewDetailEmployeeComponent implements OnInit {

  pageTitle = "Chi Tiết Nhân Viên";
  constructor() { }

  ngOnInit(): void {
  }

}

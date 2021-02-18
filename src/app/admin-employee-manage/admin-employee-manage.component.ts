import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-employee-manage',
  templateUrl: './admin-employee-manage.component.html',
  styleUrls: ['./admin-employee-manage.component.css']
})
export class AdminEmployeeManageComponent implements OnInit {

  pageTitle: string = "Danh Sách Nhân Viên";
  addEmployeeBtn: string = "Thêm Nhân Viên";
  status: boolean = false;

  constructor() {
   }

  ngOnInit(): void {
  }

  displayAddEmployeeDialog() {
    this.status = !this.status;
  }
}

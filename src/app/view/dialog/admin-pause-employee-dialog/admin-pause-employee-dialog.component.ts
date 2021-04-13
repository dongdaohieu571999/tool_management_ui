import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeAcc } from 'src/app/model/EmployeeAcc';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-admin-pause-employee-dialog',
  templateUrl: './admin-pause-employee-dialog.component.html',
  styleUrls: ['./admin-pause-employee-dialog.component.css']
})
export class AdminPauseEmployeeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public id:number,
  private employeeService:EmployeeService) { }

  employeeAcc : Array<EmployeeAcc>;
  ngOnInit(): void {
    this.employeeService.getAllAccByIDRole(2).subscribe((data => {
      this.employeeAcc = data;
      this.employeeAcc=this.employeeAcc.filter(x => x.status == true && !(x.id == this.id));
    }))
  }

}

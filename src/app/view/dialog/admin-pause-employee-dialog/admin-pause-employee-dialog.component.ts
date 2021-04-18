import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeAcc } from 'src/app/model/EmployeeAcc';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-admin-pause-employee-dialog',
  templateUrl: './admin-pause-employee-dialog.component.html',
  styleUrls: ['./admin-pause-employee-dialog.component.css']
})
export class AdminPauseEmployeeDialogComponent implements OnInit {

  constructor(private snackBar:SnackbarService,@Inject(MAT_DIALOG_DATA) public id_employee_acc:number,
  private employeeService:EmployeeService,public dialogRef: MatDialogRef<AdminPauseEmployeeDialogComponent>) { }

  employeeAcc : Array<EmployeeAcc>;
  ngOnInit(): void {
    this.employeeService.getAllAccByIDRole(2).subscribe((data => {
      this.employeeAcc = data;
      this.employeeAcc=this.employeeAcc.filter(x => x.status == true && !(x.id == this.id_employee_acc));
    }))
  }
  PauseEmployee(){
    let codeEmployeeNew = (<HTMLInputElement>document.getElementById('saler')).value;
    this.employeeService.PauseEmployee(codeEmployeeNew,this.id_employee_acc).subscribe((data =>{
        this.snackBar.openSnackBar("Ngưng nhân viên thành công","Đóng");
    }))
    this.dialogRef.close();
  }
}

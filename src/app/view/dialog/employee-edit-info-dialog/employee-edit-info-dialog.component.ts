import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeInfoDTO } from 'src/app/model/EmployeeInfoDTO';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-employee-edit-info-dialog',
  templateUrl: './employee-edit-info-dialog.component.html',
  styleUrls: ['./employee-edit-info-dialog.component.css']
})
export class EmployeeEditInfoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public employeinfoDTO:EmployeeInfoDTO,private employeeService:EmployeeService,private snackbar: SnackbarService) { }


  genders= Array[2] = [
    {value: 'true', viewValue: 'Nam'},
    {value: 'false', viewValue: 'Nữ'},
  ];

  marital_statuss = Array[2] = [
    {value: 'true', viewValue: 'Đã Kết Hôn'},
    {value: 'false', viewValue: 'Chưa Kết Hôn'},
  ];

  ngOnInit(): void {
  }
public onSubmit(employeinfoDTO:EmployeeInfoDTO){
  this.employeeService.UpdateEmployeeInfo(employeinfoDTO).subscribe((data =>{
    this.snackbar.openSnackBar('Cập Nhật Thành Công','Đóng');
  }))
}
}

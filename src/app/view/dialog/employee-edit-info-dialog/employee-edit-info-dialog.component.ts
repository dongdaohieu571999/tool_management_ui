import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeInfoDTO } from 'src/app/model/EmployeeInfoDTO';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-employee-edit-info-dialog',
  templateUrl: './employee-edit-info-dialog.component.html',
  styleUrls: ['./employee-edit-info-dialog.component.css']
})
export class EmployeeEditInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeEditInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public employeinfoDTO:any,private employeeService:EmployeeService,private snackbar: SnackbarService) { }


  genders= Array[2] = [
    {value: 'true', viewValue: 'Nam'},
    {value: 'false', viewValue: 'Nữ'},
  ];

  marital_statuss = Array[2] = [
    {value: 'true', viewValue: 'Đã Kết Hôn'},
    {value: 'false', viewValue: 'Chưa Kết Hôn'},
  ];

  ngOnInit(): void {
    this.employeinfoDTO.date_of_birth = new Date(this.employeinfoDTO.date_of_birth).getFullYear() +"-"+ (new Date(this.employeinfoDTO.date_of_birth).getMonth() < 10 ? "0"+(new Date(this.employeinfoDTO.date_of_birth).getMonth()+1):new Date(this.employeinfoDTO.date_of_birth).getMonth()+1 )+"-"+ new Date(this.employeinfoDTO.date_of_birth).getDate();
  }
public onSubmit(employeinfoDTO:EmployeeInfoDTO){
  this.employeeService.UpdateEmployeeInfo(employeinfoDTO).subscribe((data =>{
    this.snackbar.openSnackBar('Cập Nhật Thành Công','Đóng');
    this.dialogRef.close();
  }))
}
}

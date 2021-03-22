import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeInfo } from 'src/app/model/EmployeeInfo';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminAddEmployeeInfoComponent } from '../dialog/admin-add-employee-info/admin-add-employee-info.component';
import { EmployeeInfoDTO } from 'src/app/model/EmployeeInfoDTO';

@Component({
  selector: 'app-admin-employee-manage',
  templateUrl: './admin-employee-manage.component.html',
  styleUrls: ['./admin-employee-manage.component.css']
})
export class AdminEmployeeManageComponent implements OnInit {

  pageTitle: string = "Danh Sách Nhân Viên";
  addEmployeeBtn: string = "Thêm Nhân Viên";
  status: boolean = false;
  namesearch:String;

  constructor(private employeeService : EmployeeService,private dialog :MatDialog ) 
  {}

  ngOnInit(): void {
  }

  displayAddEmployeeDialog() {
    this.status = !this.status;
  }
  
  employeeinfo = new EmployeeInfoDTO(0,'','',new Date(),12,'','','','',new Date(),new Date(),true,1,1,1,1,1,1,true,'','','','','','','','','','','','','');
public openDialog(){
  let dialogRef = this.dialog.open(AdminAddEmployeeInfoComponent,{
    data : this.employeeinfo
  });
  
  dialogRef.afterClosed().subscribe(result => {
    
  })
}

}

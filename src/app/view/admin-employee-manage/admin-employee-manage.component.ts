import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeInfo } from 'src/app/model/EmployeeInfo';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminAddEmployeeInfoComponent } from '../dialog/admin-add-employee-info/admin-add-employee-info.component';

@Component({
  selector: 'app-admin-employee-manage',
  templateUrl: './admin-employee-manage.component.html',
  styleUrls: ['./admin-employee-manage.component.css']
})
export class AdminEmployeeManageComponent implements OnInit {

  pageTitle: string = "Danh Sách Nhân Viên";
  addEmployeeBtn: string = "Thêm Nhân Viên";
  status: boolean = false;


  constructor(private employeeService : EmployeeService,private dialog :MatDialog ) 
  {}

  ngOnInit(): void {
  }

  displayAddEmployeeDialog() {
    this.status = !this.status;
  }

  public onSubmit(accForm : NgForm){
   const emInfo = new EmployeeInfo(
     accForm.value.name,
     accForm.value.address,
     accForm.value.email,
     accForm.value.phone,
     accForm.value.dob,  
     accForm.value.ID_card,
     1,
     accForm.value.dob,
     accForm.value.dob,
     true,
     null,
     null,
     1);
    this.employeeService.addEmployeeInfo(emInfo).subscribe((data => {
      console.log(data);
    }));
  }

public openDialog(){
  let dialogRef = this.dialog.open(AdminAddEmployeeInfoComponent);
  
  dialogRef.afterClosed().subscribe(result => {
   console.log("vl day"); 
  })

}

}

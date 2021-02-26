import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeInfo } from 'src/app/model/EmployeeInfo';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-admin-employee-manage',
  templateUrl: './admin-employee-manage.component.html',
  styleUrls: ['./admin-employee-manage.component.css']
})
export class AdminEmployeeManageComponent implements OnInit {

  pageTitle: string = "Danh Sách Nhân Viên";
  addEmployeeBtn: string = "Thêm Nhân Viên";
  status: boolean = false;


  constructor(private employeeService : EmployeeService) 
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
     1,
     1,
     1);
    this.employeeService.addEmployeeInfo(emInfo).subscribe((data => {
      console.log(data);
    }));
  }
}

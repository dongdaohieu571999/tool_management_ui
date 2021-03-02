import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeInfo } from 'src/app/model/EmployeeInfo';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-admin-add-employee-info',
  templateUrl: './admin-add-employee-info.component.html',
  styleUrls: ['./admin-add-employee-info.component.css']
})
export class AdminAddEmployeeInfoComponent implements OnInit {

  constructor(public employeeService : EmployeeService) { }

  ngOnInit(): void {
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
    //  this.employeeService.addEmployeeInfo(emInfo).subscribe((data => {
    //    console.log(data);
    //  }));
    console.log(emInfo);
   }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeAcc } from 'src/app/model/EmployeeAcc';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { ServerHttpService } from 'src/app/services/http/server-http.service';

@Component({
  selector: 'app-view-em-table',
  templateUrl: './view-em-table.component.html',
  styleUrls: ['./view-em-table.component.css']
})
export class ViewEmTableComponent implements OnInit {
  public employeeInfos = [];

  statusAddAcc: boolean = false;
  constructor(private serverHttpService: ServerHttpService,private employeeService : EmployeeService) { }

  ngOnInit(): void {  
   this.employeeService.getAllInfoAcc().subscribe((data => {
     this.employeeInfos = data;
     console.log(this.employeeInfos);
   }))
  }

  displayAddAccDialog(): void {
    this.statusAddAcc = !this.statusAddAcc;
  }
  public onSubmit(accForm : NgForm){
    // console.log("Username :"+this.user + "Password : "+this.password);
    const newEmAcc = new EmployeeAcc(accForm.value.user,accForm.value.password,1,true);
     this.employeeService.addEmployeeAccount(newEmAcc).subscribe((data => {
       console.log(data);
     }));
     this.displayAddAccDialog();
  }
   

}

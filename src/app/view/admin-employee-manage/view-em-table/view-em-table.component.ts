import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeAcc } from 'src/app/model/EmployeeAcc';
import { EmployeeInfo } from 'src/app/model/EmployeeInfo';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { ServerHttpService } from 'src/app/services/http/server-http.service';
import { AdminAddAccountEmployeeComponent } from '../../dialog/admin-add-account-employee/admin-add-account-employee.component';

@Component({
  selector: 'app-view-em-table',
  templateUrl: './view-em-table.component.html',
  styleUrls: ['./view-em-table.component.css']
})
export class ViewEmTableComponent implements OnInit {
  public employeeInfos = [];


  statusAddAcc: boolean = false;
  constructor(private spinner: NgxSpinnerService, private serverHttpService: ServerHttpService, private employeeService: EmployeeService, public dialog: MatDialog, private router: Router) { }

  page: number = 1;
  totalRecords: number;
  data: Array<EmployeeInfo>;

  ngOnInit(): void {  
      this.employeeService.subsVar = this.employeeService.    
      callRefreshTable.subscribe((name:string) => {    
        this.refresh();
      });   
    this.refresh();
  }

  public openDialog(employeeinfo: EmployeeInfo) {
    this.dialog.open(AdminAddAccountEmployeeComponent, {
      data: employeeinfo
    });
  }
  public EmployeeDetail(id: number) {
    this.router.navigate(['employee-detail-admin', id]);
  }

  public refresh() {
    this.spinner.show();
    this.employeeService.getAllInfoAcc().subscribe((data => {
      this.data = data;
      this.totalRecords = data.length;
      this.spinner.hide();
    }))
  }




  displayAddAccDialog(): void {
    this.statusAddAcc = !this.statusAddAcc;
  }
  public onSubmit(accForm: NgForm) {
    // console.log("Username :"+this.user + "Password : "+this.password);
    const newEmAcc = new EmployeeAcc(accForm.value.user, accForm.value.password, 1, true);
    this.employeeService.addEmployeeAccount(newEmAcc).subscribe((data => {
      console.log(data);
    }));
    this.displayAddAccDialog();
  }
}

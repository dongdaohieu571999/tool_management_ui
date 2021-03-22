import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EmployeeInfoDTO } from 'src/app/model/EmployeeInfoDTO';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { EmployeeEditInfoDialogComponent } from 'src/app/view/dialog/employee-edit-info-dialog/employee-edit-info-dialog.component';

@Component({
  selector: 'app-detail-em-table',
  templateUrl: './detail-em-table.component.html',
  styleUrls: ['./detail-em-table.component.css']
})
export class DetailEmTableComponent implements OnInit {

  statusAddInfoDialog : boolean = false;
  statusPasswordDialog: boolean = false;
  statusDeactiveAccDialog: boolean = false;
  constructor(private employeeService : EmployeeService,private activateRoute:ActivatedRoute,private dialog:MatDialog) { }
  employeinfoDTO : EmployeeInfoDTO;
  ngOnInit(): void {
    this.employeeService.getDetailEmployebyID(this.activateRoute.snapshot.params['id']).subscribe((data =>{
      this.employeinfoDTO = data;
      console.log(data);
    }))
  }

  public openDialogEdit(){
    let dialogRef = this.dialog.open(EmployeeEditInfoDialogComponent,{data : this.employeinfoDTO} );
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
}

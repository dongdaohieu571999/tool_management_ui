import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeInfoDTO } from 'src/app/model/EmployeeInfoDTO';
import { CommonService } from 'src/app/services/common/common.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-detail-employee-info',
  templateUrl: './detail-employee-info.component.html',
  styleUrls: ['./detail-employee-info.component.css']
})
export class DetailEmployeeInfoComponent implements OnInit {

  constructor(private common: CommonService, private spinner: NgxSpinnerService, private employeeService: EmployeeService, private activateRoute: ActivatedRoute) { }

  employeinfoDTO: EmployeeInfoDTO;
  ngOnInit(): void {
    this.common.titlePage = "Chi Tiết Nhân Viên";
    this.employeeService.getDetailEmployebyID(this.activateRoute.snapshot.params['id']).subscribe((data => {
      console.log(data);
      this.spinner.show();
      this.employeinfoDTO = data;
      this.spinner.hide();
    }))

  }
}

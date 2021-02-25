import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD:src/app/admin-employee-manage/view-em-table/view-em-table.component.ts
import { employeeAcc } from 'src/app/model/EmployeeAcc';
import { WebApiService } from 'src/app/services/web-api.service';
=======
import { ServerHttpService } from 'src/app/services/http/server-http.service';
>>>>>>> origin/hieu:src/app/view/admin-employee-manage/view-em-table/view-em-table.component.ts

@Component({
  selector: 'app-view-em-table',
  templateUrl: './view-em-table.component.html',
  styleUrls: ['./view-em-table.component.css']
})
export class ViewEmTableComponent implements OnInit {
  public accountEmployee : employeeAcc[] = [];
  public user = '';
  public password = '';
  public confirmpassword = '';
  public idrole = '';

  statusAddAcc: boolean = false;
<<<<<<< HEAD:src/app/admin-employee-manage/view-em-table/view-em-table.component.ts
  constructor(private webApi : WebApiService) {
    
   }

  ngOnInit(): void {
    // this.webApi.listAccount().subscribe((data) =>{
    //    this.accountEmployee = data;
    // })
=======
  constructor(private serverHttpService: ServerHttpService) { }

  ngOnInit(): void {
    this.serverHttpService.getAllAcc().subscribe((data => {
      console.log(data);
    }));
>>>>>>> origin/hieu:src/app/view/admin-employee-manage/view-em-table/view-em-table.component.ts
  }

  displayAddAccDialog(): void {
    this.statusAddAcc = !this.statusAddAcc;
  }
  public onSubmit(){
    // console.log("Username :"+this.user + "Password : "+this.password);
    const newEmAcc = {code:this.user,password:this.password,idRole : this.idrole };
    console.log("New acc",newEmAcc);
    // this.webApi.addEmployeeAccount(newEmAcc).subscribe((data) => {
    //   console.log(emAcc);
    // });
  }
   

}

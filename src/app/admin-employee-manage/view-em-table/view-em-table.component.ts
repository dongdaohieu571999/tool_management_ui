import { Component, OnInit } from '@angular/core';
import { employeeAcc } from 'src/app/model/EmployeeAcc';
import { WebApiService } from 'src/app/services/web-api.service';

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
  constructor(private webApi : WebApiService) {
    
   }

  ngOnInit(): void {
    // this.webApi.listAccount().subscribe((data) =>{
    //    this.accountEmployee = data;
    // })
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

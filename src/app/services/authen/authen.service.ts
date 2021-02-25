import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SigInData } from 'src/app/model/SigInData';
import { CommonService } from '../common/common.service';
import { EmployeeService } from '../employee/employee.service';
import { ServerHttpService } from '../http/server-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  id_role = "";
  isAuthen = false;

  constructor(private router: Router, private serverhttpService:ServerHttpService,private employee:EmployeeService,private common:CommonService) { }

  authenticate(sigIndata: SigInData): boolean{
    this.serverhttpService.getAcc(sigIndata.getCode(),sigIndata.getPass()).subscribe((data =>{
      if(data !== ''){
        this.isAuthen = true;
        this.common.setCookie('token_key',data['token_key'],3);
        this.router.navigate(['dashboard']);
        this.getRoleID();
        return true;
      } else {
        this.isAuthen = false;
        return false;
      }
    }));
    return false;
  }

  getRoleID(){
    this.employee.getIdRole().subscribe((data1 => {
      this.id_role = data1['id_role'];
     }));
  }

  
}

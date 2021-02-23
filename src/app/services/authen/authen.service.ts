import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SigInData } from 'src/app/model/SigInData';
import { ServerHttpService } from '../http/server-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  // private readonly mockedUser = new SigInData("hieu","daohieu571999");
  isAuthen = false;

  constructor(private router: Router, private serverhttpService:ServerHttpService) { }

  authenticate(sigIndata: SigInData): boolean{
    this.serverhttpService.getAcc(sigIndata.getCode(),sigIndata.getPass()).subscribe((data =>{
      if(data !== ''){
        this.isAuthen = true;
        this.setCookie('token_key',data['token_key'],3);
        this.router.navigate(['dashboard']);
        return true;
      } else {
        this.isAuthen = false;
        return false;
      }
    }));
    return false;
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = '/') {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = `expires=${d.toUTCString()}`;
    let cpath:string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }
}

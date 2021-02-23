import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SigInData } from '../../model/SigInData';
import { AuthenService } from '../../services/authen/authen.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private authenticationService:AuthenService) { }

  ngOnInit(): void {
  }

  onSubmit(sigInForm: NgForm){
    const sigInData = new SigInData(sigInForm.value.code,sigInForm.value.pass);
    this.authenticationService.authenticate(sigInData);
  }

  
}

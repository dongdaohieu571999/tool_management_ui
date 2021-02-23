import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  title: string = "Enter your email to get reset password link";
  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(): void {
    this.title = "Your password reset link has been sent to your email, please check your email";
  }
}

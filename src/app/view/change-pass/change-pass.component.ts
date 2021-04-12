import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/services/common/common.service';
import { ServerHttpService } from 'src/app/services/http/server-http.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  constructor(private snackBar:SnackbarService,private common:CommonService,private httpService:ServerHttpService) { }

  ngOnInit(): void {
    this.common.titlePage = "Đổi Mật Khẩu";
  }

  onSubmit(changePassForm:NgForm){
    this.snackBar.openSnackBar('Vui Lòng Kiểm Tra Hòm Thư '+ changePassForm.value.mail +" Cảm ơn bạn!",'Đóng');
    let dataRequestChangePass = { "email" : changePassForm.value.mail, "token_key" : this.common.getCookie('token_key')};
    this.httpService.sendMailConfirm(dataRequestChangePass).subscribe((data => {
      
    }));
  }

}

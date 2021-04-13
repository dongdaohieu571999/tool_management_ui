import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Mail } from 'src/app/model/Mail';
import { CommonService } from 'src/app/services/common/common.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { MailService } from 'src/app/services/mail/mail.service';

@Component({
  selector: 'app-add-mail-dialog',
  templateUrl: './add-mail-dialog.component.html',
  styleUrls: ['./add-mail-dialog.component.css']
})
export class AddMailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public mail: Mail,private common:CommonService,private emService: EmployeeService, private mailService: MailService) { }

  myControl = new FormControl();
  recieverCode:string;
  options= new Array();
  filteredOptions: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    this.emService.getAllAcc().subscribe((data => {
      var list = new Array();
      data.filter(function(el){
        list.push(el.code);
      });
      this.options = list;
    }))
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  sendMail(): void {
    let data = {title:this.mail.title,senderCode:jwtDecode(this.common.getCookie('token_key'))['sub'],recieverCode:this.recieverCode,
    content:this.mail.content}
    this.mailService.addNewMail(data).subscribe((data => {
      this.common.invokeRefreshTableFun();
    }));
  }
}

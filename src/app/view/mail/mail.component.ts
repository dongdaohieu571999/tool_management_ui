import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MailDTO } from 'src/app/model/MailDTO';
import { MailService } from 'src/app/services/mail/mail.service';
import { CommonService } from 'src/app/services/common/common.service';
import { AddMailDialogComponent } from '../dialog/add-mail-dialog/add-mail-dialog.component';
import { ServerHttpService } from 'src/app/services/http/server-http.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent implements OnInit {

  constructor(private mailService: MailService,private confirmMail:ServerHttpService ,public dialog: MatDialog, private router: Router, private common: CommonService) { }

  ngOnInit(): void {
    this.common.titlePage = "Hộp Thư";
    this.mailService.getAllMail().subscribe((data => {
      this.data = data;
      this.totalRecord = data.length;
    }));
  }

  data: Array<MailDTO>;
  pages: number = 1;
  totalRecord: number;
  mailId: number;

  mail = new MailDTO("", "", new Date(), "", "", "", "");

  detailMail(mail_id: number): void {
    this.mailService.setMailId(mail_id);
  }

  displayDialog(): void {
    let dialogRef = this.dialog.open(AddMailDialogComponent, {data : this.mail});
  }
}

import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MailDTO } from 'src/app/model/MailDTO';
import { MailService } from 'src/app/services/mail/mail.service';
import { CommonService } from 'src/app/services/common/common.service';
import { AddMailDialogComponent } from '../dialog/add-mail-dialog/add-mail-dialog.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent implements OnInit {

  constructor(private mailService: MailService, public dialog: MatDialog, private router: Router, private common: CommonService) { }

  ngOnInit(): void {
    this.mailService.getAllMail().subscribe((data => {
      this.data = data;
      this.totalRecord = data.length;
    }));
  }

  data: Array<MailDTO>;
  pages: number = 1;
  totalRecord: number;
  mailId: number;

  detailMail(mail_id: number): void {
    this.mailService.setMailId(mail_id);
  }

  displayDialog(): void {
    let dialogRef = this.dialog.open(AddMailDialogComponent);
  }
}

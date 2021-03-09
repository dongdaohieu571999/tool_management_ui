import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Mail } from 'src/app/model/Mail';
import { MailService } from 'src/app/services/mail/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent implements OnInit {

  constructor(private mailService: MailService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.mailService.getAllMail().subscribe((data => {
      this.data = data;
      this.totalRecord = data.length;
      console.log(data);
    }));
  }

  data: Array<Mail>;
  pages: number = 1;
  totalRecord: number;

}

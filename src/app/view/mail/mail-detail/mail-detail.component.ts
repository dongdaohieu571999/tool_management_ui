import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailDTO } from 'src/app/model/MailDTO';
import { MailService } from 'src/app/services/mail/mail.service';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.css']
})
export class MailDetailComponent implements OnInit {

  data: MailDTO;
  mailId : number;
  constructor(private mailService: MailService, private router: Router) {
    this.mailId = mailService.getMailId();
  }

  ngOnInit(): void {
    console.log(this.mailId);
    this.mailService.getDetailMail(this.mailId).subscribe((data => {
      this.data = data;
      console.log(data);
    }));
  }



}

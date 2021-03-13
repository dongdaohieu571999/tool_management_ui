import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MailDTO } from 'src/app/model/MailDTO';
import { MailService } from 'src/app/services/mail/mail.service';

@Component({
  selector: 'app-add-mail-dialog',
  templateUrl: './add-mail-dialog.component.html',
  styleUrls: ['./add-mail-dialog.component.css']
})
export class AddMailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public mail: any, private mailService: MailService) { }

  ngOnInit(): void {
  }

  sendMail(): void {
    console.log(this.mail);
    this.mailService.addNewMail(this.mail).subscribe((data => {}));
  }
}

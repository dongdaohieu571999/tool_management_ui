import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-em-table',
  templateUrl: './detail-em-table.component.html',
  styleUrls: ['./detail-em-table.component.css']
})
export class DetailEmTableComponent implements OnInit {

  statusAddInfoDialog : boolean = false;
  statusPasswordDialog: boolean = false;
  statusDeactiveAccDialog: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  displayAddEmployeeInfo(): void {
    this.statusAddInfoDialog = !this.statusAddInfoDialog;
  }

  displayPasswordDialog(): void {
    this.statusPasswordDialog = !this.statusPasswordDialog;
  }

  displayDeactiveAccDialog(): void {
    this.statusDeactiveAccDialog = !this.statusDeactiveAccDialog;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-em-table',
  templateUrl: './view-em-table.component.html',
  styleUrls: ['./view-em-table.component.css']
})
export class ViewEmTableComponent implements OnInit {

  statusAddAcc: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  displayAddAccDialog(): void {
    this.statusAddAcc = !this.statusAddAcc;
  }
}

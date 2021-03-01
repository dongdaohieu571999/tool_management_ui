import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.component.html',
  styleUrls: ['./detail-request.component.css']
})
export class DetailRequestComponent implements OnInit {

  status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  displayConfirmDialog(): void {
    this.status = !this.status;
  }

}

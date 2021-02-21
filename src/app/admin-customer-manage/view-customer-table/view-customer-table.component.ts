import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-customer-table',
  templateUrl: './view-customer-table.component.html',
  styleUrls: ['./view-customer-table.component.css']
})
export class ViewCustomerTableComponent implements OnInit {

  status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  displayAddCustomerAccDialog(): void {
    this.status = !this.status;
  }
}

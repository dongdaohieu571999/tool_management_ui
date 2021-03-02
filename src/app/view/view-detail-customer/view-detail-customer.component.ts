import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-detail-customer',
  templateUrl: './view-detail-customer.component.html',
  styleUrls: ['./view-detail-customer.component.css']
})
export class ViewDetailCustomerComponent implements OnInit {

  customerCode: string = "#1001";
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
@Component({
  selector: 'app-customer-edit-info',
  templateUrl: './customer-edit-info.component.html',
  styleUrls: ['./customer-edit-info.component.css']
})
export class CustomerEditInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public customerInfo:any) { }
  ngOnInit(): void { }
}

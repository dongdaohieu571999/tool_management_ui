import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";
import { map, startWith } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CommonService } from 'src/app/services/common/common.service';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-customer-illustration-dialog',
  templateUrl: './add-customer-illustration-dialog.component.html',
  styleUrls: ['./add-customer-illustration-dialog.component.css']
})
export class AddCustomerIllustrationDialogComponent implements OnInit {

  constructor(private snackBar: SnackbarService,private customerOwnIllustration:IllustrationService,private common:CommonService,private customerService:CustomerService) { }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  myControl = new FormControl();
  codeValue:string;
  options= new Array();
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.customerService.getAllCustomerInfo(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data => {
      var list = new Array();
      data.filter(function(el){
        list.push(el.code);
      });
      this.options = list;
      console.log(list);
    }))
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  onSubmit(){
    this.customerOwnIllustration.getAllCustomerOwnIllustration().subscribe((data1 => {
      var checkDup = false;
      for(let el of data1){
        if(el['code'] == this.codeValue){
          checkDup = true;
          break;
        }
      }
      if(!checkDup){
        this.customerOwnIllustration.addOneCustomerOwnIllustration(this.codeValue).subscribe((data => {
          this.customerOwnIllustration.invokeRefreshTableFun();
        }))
      } else {
        this.snackBar.openSnackBar('Khách Hàng Đã Có Danh Sách Bảng Minh Họa','Đóng');
      }
    }))
    
  }

}

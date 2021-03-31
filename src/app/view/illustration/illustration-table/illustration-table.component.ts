import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerOwnIllustration } from 'src/app/model/CustomerOwnIllustration';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';
import jwt_decode from 'jwt-decode';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-illustration-table',
  templateUrl: './illustration-table.component.html',
  styleUrls: ['./illustration-table.component.css']
})
export class IllustrationTableComponent implements OnInit {

  constructor(private common:CommonService,private router : Router,private illustration:IllustrationService,private spinner:NgxSpinnerService,private illustrationService:IllustrationService) { }

  listCustomerOwnIllustration:Array<CustomerOwnIllustration>

  ngOnInit(): void {   
      this.illustrationService.subsVar = this.illustrationService.
      callRefreshTable.subscribe((name:string) => {    
        this.refresh();
      });
    this.refresh();
  }

  public refresh(){
    this.spinner.show();
    this.illustrationService.getAllCustomerOwnIllustration(jwt_decode(this.common.getCookie('token_key'))['sub']).subscribe((data => {
      this.listCustomerOwnIllustration = data;
      console.log(this.listCustomerOwnIllustration);;
      this.spinner.hide();
    }))
  }

  public listIllustration(id:number){
    this.router.navigate(['list-illustration',id]);
  }





}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerOwnIllustration } from 'src/app/model/CustomerOwnIllustration';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';

@Component({
  selector: 'app-illustration-table',
  templateUrl: './illustration-table.component.html',
  styleUrls: ['./illustration-table.component.css']
})
export class IllustrationTableComponent implements OnInit {

  constructor(private router : Router,private illustration:IllustrationService,private spinner:NgxSpinnerService,private illustrationService:IllustrationService) { }

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
    this.illustrationService.getAllCustomerOwnIllustration().subscribe((data => {
      this.listCustomerOwnIllustration = data;
      console.log(this.listCustomerOwnIllustration);;
      this.spinner.hide();
    }))
  }

  public listIllustration(id:number){
    this.router.navigate(['list-illustration',id]);
  }





}

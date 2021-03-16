import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerOwnIllustration } from 'src/app/model/CustomerOwnIllustration';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';

@Component({
  selector: 'app-illustration-table',
  templateUrl: './illustration-table.component.html',
  styleUrls: ['./illustration-table.component.css']
})
export class IllustrationTableComponent implements OnInit {

  constructor(private illustration:IllustrationService,private spinner:NgxSpinnerService,private illustrationService:IllustrationService) { }

  listCustomerOwnIllustration:Array<CustomerOwnIllustration>

  ngOnInit(): void {
    if (this.illustrationService.subsVar==undefined) {    
      this.illustrationService.subsVar = this.illustrationService.
      callRefreshTable.subscribe((name:string) => {    
        this.refresh();
      });
    }
    this.refresh();
  }

  public refresh(){
    this.spinner.show();
    this.illustrationService.getAllCustomerOwnIllustration().subscribe((data => {
      this.listCustomerOwnIllustration = data;
      this.spinner.hide();
    }))
  }



}

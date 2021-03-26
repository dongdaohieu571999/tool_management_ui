import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractRequest } from 'src/app/model/ContractRequest';
import { ContractrequestService } from 'src/app/services/contractRequest/contractrequest.service';

@Component({
  selector: 'app-appraiser-request-manage',
  templateUrl: './appraiser-request-manage.component.html',
  styleUrls: ['./appraiser-request-manage.component.css']
})
export class AppraiserRequestManageComponent implements OnInit {

  constructor(private contractRequestService:ContractrequestService,private router : Router) { }

  contractRequests : Array<ContractRequest>
  contractRequestsApprovals : Array<ContractRequest>
  ngOnInit(): void {
    this.contractRequestService.getAllContractRequest().subscribe((data => {
      this.contractRequests = data;
      console.log(this.contractRequests);
 }))
    this.contractRequestService.getAllContractRequestApproval().subscribe((data =>{
      this.contractRequestsApprovals = data;
      console.log(this.contractRequestsApprovals);
    }))

  }

public requestDetail(id_request:number){
  this.router.navigate(['appraiser-request-detail',id_request]);
}

}

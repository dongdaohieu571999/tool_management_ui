import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/model/Request';
import jwt_decode from 'jwt-decode';
import { ContractrequestService } from 'src/app/services/contractRequest/contractrequest.service';
import { CommonService } from 'src/app/services/common/common.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-appraiser-request-manage',
  templateUrl: './appraiser-request-manage.component.html',
  styleUrls: ['./appraiser-request-manage.component.css']
})
export class AppraiserRequestManageComponent implements OnInit {

  constructor(private common:CommonService,private contractRequestService:ContractrequestService,private router : Router) { }

  pageApprovals: number = 1;
  pageRequest: number = 1;
  totalRecordsApprovals: number;
  totalRecordsRequest: number;
  contractRequests : Array<Request>
  contractRequestsApprovals : Array<Request>
  ngOnInit(): void {
    this.contractRequestService.getAllContractRequest(jwtDecode(this.common.getCookie('token_key'))['sub']).subscribe((data => {
      this.contractRequests = data;
      this.totalRecordsRequest = this.contractRequests.length;
 }))
    this.contractRequestService.getAllContractRequestApproval(jwtDecode(this.common.getCookie('token_key'))['sub']).subscribe((data =>{
      this.contractRequestsApprovals = data;
      this.totalRecordsApprovals = this.contractRequestsApprovals.length;
    }))

  }

public requestDetail(id_request:number){
  this.router.navigate(['appraiser-request-detail',id_request]);
}

}

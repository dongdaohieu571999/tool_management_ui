import { Component, OnInit } from '@angular/core';
import { ContractRequest } from 'src/app/model/ContractRequest';
import { ContractrequestService } from 'src/app/services/contractRequest/contractrequest.service';

@Component({
  selector: 'app-appraiser-request-manage',
  templateUrl: './appraiser-request-manage.component.html',
  styleUrls: ['./appraiser-request-manage.component.css']
})
export class AppraiserRequestManageComponent implements OnInit {

  constructor(private contractRequestService:ContractrequestService) { }

  contractRequests : Array<ContractRequest>
  ngOnInit(): void {
    this.contractRequestService.getAllContractRequest().subscribe((data => {
      this.contractRequests = data;
      console.log(this.contractRequests);
 }))
  }

}

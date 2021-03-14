import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailContractRequest } from 'src/app/model/DetailContractRequest';
import { ContractrequestService } from 'src/app/services/contractRequest/contractrequest.service';

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.component.html',
  styleUrls: ['./detail-request.component.css']
})
export class DetailRequestComponent implements OnInit {

  status: boolean = false;
  constructor(private contractRequestService:ContractrequestService,private activateRoute:ActivatedRoute) { }

  detailContractRequest : DetailContractRequest;

  ngOnInit(): void {
    this.contractRequestService.getOneContractRequest(this.activateRoute.snapshot.params['id']).subscribe((data =>{
      this.detailContractRequest = data;
      console.log(this.detailContractRequest);
  }))

}

  displayConfirmDialog(): void {
    this.status = !this.status;
  }

}

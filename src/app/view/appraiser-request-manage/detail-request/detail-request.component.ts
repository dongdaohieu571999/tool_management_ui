import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DetailContractRequest } from 'src/app/model/DetailContractRequest';
import { ContractrequestService } from 'src/app/services/contractRequest/contractrequest.service';
import { AppraiserReviewFormComponent } from '../../dialog/appraiser-review-form/appraiser-review-form.component';

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.component.html',
  styleUrls: ['./detail-request.component.css']
})
export class DetailRequestComponent implements OnInit {

  status: boolean = false;
  constructor(private dialog : MatDialog,private contractRequestService:ContractrequestService,private activateRoute:ActivatedRoute) { }

  detailContractRequest : DetailContractRequest;

  ngOnInit(): void {
    this.contractRequestService.getOneContractRequest(this.activateRoute.snapshot.params['id']).subscribe((data =>{
      this.detailContractRequest = data;
      console.log(this.detailContractRequest);
  }))
      
}

  displayConfirmDialog(): void {
   let dialogRef = this.dialog.open(AppraiserReviewFormComponent,{data:this.detailContractRequest});
   dialogRef.afterClosed().subscribe(result => {
     
   })

  }

}

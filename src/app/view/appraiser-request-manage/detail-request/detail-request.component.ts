import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Contract } from 'src/app/model/Contract';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { Request } from 'src/app/model/Request';
import { CommonService } from 'src/app/services/common/common.service';
import { ContractService } from 'src/app/services/contract/contract.service';
import { ContractrequestService } from 'src/app/services/contractRequest/contractrequest.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { AppraiserReviewFormComponent } from '../../dialog/appraiser-review-form/appraiser-review-form.component';
import { ContractDetailDialogComponent } from '../../dialog/contract-detail-dialog/contract-detail-dialog.component';
import { IllustrationDetailDialogComponent } from '../../dialog/illustration-detail-dialog/illustration-detail-dialog.component';
import jwt_decode from "jwt-decode";
import { IllustrationService } from 'src/app/services/illustration/illustration.service';
import { RelatedPersonInfo } from 'src/app/model/RelatedPersonInfo';
import { IllustrationSubInterest } from 'src/app/model/IllustrationSubInterest';
import { Illustration } from 'src/app/model/Illustration';

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.component.html',
  styleUrls: ['./detail-request.component.css']
})
export class DetailRequestComponent implements OnInit {

  illustration: Illustration;
  illustrationCopy: Illustration;
  listRelatedPersonNumber: Number[] = [];
  listSubRelatedPerSonBig: Array<any> = [];
  listSubRelatedPerSonSmall: IllustrationSubInterest[] = [];
  listRelatedPerSonInfo: Array<RelatedPersonInfo> = [];

  status: boolean = false;
  req:Request;
  contract:Contract;
  custInfo:Array<CustomerInfo>;
  constructor(private common:CommonService,private custService:CustomerService,private illustrationService:IllustrationService,
    private contractService:ContractService,private dialog : MatDialog,
    private contractRequestService:ContractrequestService,private activateRoute:ActivatedRoute) { }



  ngOnInit(): void {
    this.contractRequestService.getOneContractRequest(this.activateRoute.snapshot.params['id']).subscribe((data =>{
      this.req = data;
      let data1 = {id:this.req.id_contract,code:this.req.code_sender}
      this.contractService.getDetailContract(data1).subscribe((data1 => {
        this.contract = data1;

        // Start Lấy detail contract
        this.illustrationService.getIllustrationContractCreate(this.contract.id_illustration).subscribe((data => {
          this.illustration = data;
          this.illustrationCopy = data;
    
          //Biến đếm số lượng người 
          var default_number: number = this.illustration.illustrationSubInterestList[0].id_related_person;
          //tìm số lượng người bảo hiểm phụ và thông tin chi tiết
          for (let i = 0; i < this.illustration.illustrationSubInterestList.length; i++) {
            if (this.illustration.illustrationSubInterestList[i].id_related_person == default_number) {
              this.listRelatedPersonNumber.push(default_number);
              let relatedPerson = new RelatedPersonInfo(
                this.illustration.illustrationSubInterestList[i].full_name_insured_persion_extra,
                this.illustration.illustrationSubInterestList[i].insurance_buyer_relation_extra_insured_person,
                this.illustration.illustrationSubInterestList[i].dob_extra_insured_person,
                this.illustration.illustrationSubInterestList[i].gender_extra_insured_person,
                this.illustration.illustrationSubInterestList[i].carrier_group_extra_insured_person,
              );   
            this.listRelatedPerSonInfo.push(relatedPerson);
              default_number++;
            }
          }
    
          // console.log(this.illustration.illustrationSubInterestList.find(i => i.id_related_person == 1)['id_related_person']);
    
          //Duyệt qua từng người được bảo hiểm bổ sung
          for (let k = 0; k < this.listRelatedPersonNumber.length; k++) {
    
            let listSubRelatedPerSonSmall: Array<IllustrationSubInterest> = [];
            let count: number = 0;
            let id_related_person = this.illustrationCopy.illustrationSubInterestList[0].id_related_person;
    
            //tìm những thông tin có related id = nhau
            for (let i = 0; i < this.illustrationCopy.illustrationSubInterestList.length; i++) {
              if (this.illustrationCopy.illustrationSubInterestList[i].id_related_person == id_related_person) {
                listSubRelatedPerSonSmall.push(this.illustrationCopy.illustrationSubInterestList[i]);            
                count = count + 1;
              }
            }
            this.listRelatedPerSonInfo[k].listSubInterset = listSubRelatedPerSonSmall;
            this.listSubRelatedPerSonBig.push(listSubRelatedPerSonSmall);
            //tìm mảng với những giá trị của người liên quan còn lại
            this.illustrationCopy.illustrationSubInterestList = this.illustrationCopy.illustrationSubInterestList.slice(count, this.illustrationCopy.illustrationSubInterestList.length);
          }
        }))
        // End Lấy detail contract


        this.custService.getDetailCustomerInfoAdmin(this.contract.id_customer).subscribe((data2 => {
          this.custInfo = data2;
        }))
      }))
  }))


      
}

  displayConfirmDialog(): void {
   let dialogRef = this.dialog.open(AppraiserReviewFormComponent,{data:this.req});
   dialogRef.afterClosed().subscribe(result => {
     
   })
  }

  contractDetail : Contract;
  public openDialogContractDetail(id_contract:number){
    let data = {id:id_contract,code:jwt_decode(this.common.getCookie('token_key'))['sub']}
    this.contractService.getDetailContract(data).subscribe((dataReturn =>{
      this.contractDetail = dataReturn;
      let dialogRef = this.dialog.open(ContractDetailDialogComponent,{
        data:this.contract
      });
    }))
  }
  openillustrationDetailDialog(id_illustration:number){
    let dialogRef = this.dialog.open(IllustrationDetailDialogComponent,{data:id_illustration});
  }
}

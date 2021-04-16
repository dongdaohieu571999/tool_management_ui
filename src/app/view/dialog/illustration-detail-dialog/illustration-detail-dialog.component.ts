import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Illustration } from 'src/app/model/Illustration';
import { IllustrationSubInterest } from 'src/app/model/IllustrationSubInterest';
import { RelatedPersonInfo } from 'src/app/model/RelatedPersonInfo';
import { CommonService } from 'src/app/services/common/common.service';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';

@Component({
  selector: 'app-illustration-detail-dialog',
  templateUrl: './illustration-detail-dialog.component.html',
  styleUrls: ['./illustration-detail-dialog.component.css']
})
export class IllustrationDetailDialogComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<IllustrationDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,private common:CommonService,
    private illustrationService: IllustrationService, private activateRoute: ActivatedRoute) { }

  illustration: Illustration;
  illustrationCopy: Illustration;
  listRelatedPersonNumber: Number[] = [];
  listSubRelatedPerSonBig: Array<any> = [];
  listSubRelatedPerSonSmall: IllustrationSubInterest[] = [];
  listRelatedPerSonInfo: Array<RelatedPersonInfo> = [];

  ngOnInit(): void {
    if(this.common.getCookie('token_key')){
    this.illustrationService.getIllustrationContractCreate(this.id).subscribe((data => {
      this.process(data);
    }))
  } else{
    this.illustrationService.getIllustContractCreateForCustomerWebsite(this.id).subscribe((data => {
      this.process(data);
    }))
  }
}

  public process(data:any){
    this.illustration = data;
      this.illustrationCopy = data;
      console.log("ban minh hoa chi tiet :");
      console.log(this.illustration);

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

      console.log("danh sach nguoi bo sung :");
      console.log(this.listSubRelatedPerSonBig);

      console.log("danh sach nguoi bo sung chi tiet :");
      console.log(this.listRelatedPerSonInfo);
  }

}
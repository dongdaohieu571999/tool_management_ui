import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Illustration } from 'src/app/model/Illustration';
import { CommonService } from 'src/app/services/common/common.service';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';

@Component({
  selector: 'app-list-illustration',
  templateUrl: './list-illustration.component.html',
  styleUrls: ['./list-illustration.component.css']
})
export class ListIllustrationComponent implements OnInit {

  constructor(private common:CommonService,private router:Router,private illustrationService : IllustrationService,private activateRoute:ActivatedRoute) { }

illustrations : Array<Illustration>;
  ngOnInit(): void {
    this.common.titlePage = "Danh Sách Bản Minh Họa";
      this.illustrationService.getAllIllustrationBelongCustomer(this.activateRoute.snapshot.params['id']).subscribe((data =>{
        this.illustrations = data;
      }))
  }

  addIllustration(){
    this.router.navigate(['create-illustration'],{ queryParams: { id: this.activateRoute.snapshot.params['id'] } });
  }

  public illustrationDetail(id:number){
    this.router.navigate(['detail-illustration',id]);
  }
}

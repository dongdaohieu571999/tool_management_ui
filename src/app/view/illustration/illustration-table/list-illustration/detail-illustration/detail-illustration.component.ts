import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Illustration } from 'src/app/model/Illustration';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';

@Component({
  selector: 'app-detail-illustration',
  templateUrl: './detail-illustration.component.html',
  styleUrls: ['./detail-illustration.component.css']
})
export class DetailIllustrationComponent implements OnInit {

  constructor(private illustrationService:IllustrationService,private activateRoute:ActivatedRoute) { }
illustration:Illustration;

  ngOnInit(): void {
    this.illustrationService.getIllustrationContractCreate(this.activateRoute.snapshot.params['id']).subscribe((data =>{
      this.illustration = data;
      console.log(data);
    }))
  }

}

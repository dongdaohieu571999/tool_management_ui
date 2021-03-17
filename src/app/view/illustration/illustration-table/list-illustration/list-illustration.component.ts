import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { illustration } from 'src/app/model/illustration';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';

@Component({
  selector: 'app-list-illustration',
  templateUrl: './list-illustration.component.html',
  styleUrls: ['./list-illustration.component.css']
})
export class ListIllustrationComponent implements OnInit {

  constructor(private illustrationService : IllustrationService,private activateRoute:ActivatedRoute) { }

illustrations : Array<illustration>;
  ngOnInit(): void {
      this.illustrationService.getAllIllustrationBelongCustomer(this.activateRoute.snapshot.params['id']).subscribe((data =>{
        this.illustrations = data;
        console.log(this.illustrations);
      }))
  }

}

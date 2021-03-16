import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-illustration',
  templateUrl: './create-illustration.component.html',
  styleUrls: ['./create-illustration.component.css']
})
export class CreateIllustrationComponent implements OnInit {

  constructor() { }

  relatedPerson = new Array<any>();

  ngOnInit(): void {
    this.relatedPerson.push({});
  }

  addField(){
    this.relatedPerson.push({});
  }

  removeField(index: number){
    if (index > -1) {
      this.relatedPerson.splice(index, 1);
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.css']
})
export class IllustrationComponent implements OnInit {

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayAddIllusDialog(): void {
    this.status = !this.status;
  }

}

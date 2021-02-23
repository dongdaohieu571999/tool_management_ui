import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from 'src/app/services/http/server-http.service';

@Component({
  selector: 'app-view-em-table',
  templateUrl: './view-em-table.component.html',
  styleUrls: ['./view-em-table.component.css']
})
export class ViewEmTableComponent implements OnInit {

  statusAddAcc: boolean = false;
  constructor(private serverHttpService: ServerHttpService) { }

  ngOnInit(): void {
    this.serverHttpService.getAllAcc().subscribe((data => {
      console.log(data);
    }));
  }

  displayAddAccDialog(): void {
    this.statusAddAcc = !this.statusAddAcc;
  }
}

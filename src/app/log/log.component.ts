import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

  constructor( private Api: ApiServiceService) { }

  logs = [];

  ngOnInit() {
    this.logs = this.Api.getLogs();
  }

}

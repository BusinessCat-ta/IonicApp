import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.page.html',
  styleUrls: ['./log-page.page.scss'],
})
export class LogPagePage implements OnInit {

  constructor(private Api: ApiServiceService) { }

  logs = [];

  ngOnInit() {
    this.logs = this.Api.getLogs();
  }

}

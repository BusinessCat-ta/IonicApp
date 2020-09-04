import { LogAgente } from './../../models/LogModel';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

  constructor( private Api: ApiServiceService) { }

  @Input() id: string;

  logs: LogAgente;

  ngOnInit() {
    this.Api.getLogs("_"+this.id).subscribe((data) => {
      this.logs = data;
      console.log(data)
    });
  }

}

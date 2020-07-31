import { QueryModel } from './../../models/querymodel';
import { ApiServiceService } from './../api-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  query: QueryModel;
  list;

  constructor(private Api: ApiServiceService) {}

  ngOnInit(): void{
    this.queryBuild();
  }

  queryBuild= () => {
      this.query.column = "name, c_bpartner_id, ad_client_id, leadstatus, phone";
      this.query.table = "ad_user";
      this.query.where ="leadstatus != 'null'"
      this.Api.getData(this.query).subscribe((data)=>{this.list = data});
  }


}

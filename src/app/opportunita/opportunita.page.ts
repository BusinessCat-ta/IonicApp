import { Opportunity } from './../../models/OpportunityModel';
import { ApiServiceService } from './../api-service.service';
import { QueryModel } from './../../models/querymodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunita',
  templateUrl: './opportunita.page.html',
  styleUrls: ['./opportunita.page.scss'],
})
export class OpportunitaPage implements OnInit {

  constructor(private Api: ApiServiceService) { }

  ngOnInit() {
    this.queryBuild();
  }

  list: Opportunity[] = [];
  list1: Opportunity[] = [];

  queryBuild = () => {
    var query= new QueryModel;
    this.list = [];
    this.list1 = [];
    query.column = "c_bpartner_id, description, comments";
    query.table = "c_opportunity";
    query.where = "";
    this.Api.getOpp(query).subscribe((data) => { 
      this.list = data;
      this.list1 = data;
    });
  }

}

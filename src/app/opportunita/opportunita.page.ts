import { Opportunity } from './../../models/OpportunityModel';
import { ApiServiceService } from './../api-service.service';
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
    this.list = [];
    this.list1 = [];
    this.Api.getOpp().subscribe((data) => { 
      this.list = data;
      this.list1 = data;
      console.log(this.list);
    });
  }

}

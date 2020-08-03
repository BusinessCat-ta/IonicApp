import { QueryModel } from './../../models/querymodel';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular'
import {Router} from '@angular/router'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{


  list: Object;

  constructor(private Api: ApiServiceService, private menu: MenuController, private router: Router) { }

  ngOnInit(): void {
    this.queryBuild();
  }

  queryBuild = () => {
    var query= new QueryModel;
    query.column = "name, c_bpartner_id, ad_client_id, leadstatus, phone";
    query.table = "ad_user";
    query.where = "leadstatus != 'null'";
    this.Api.getData(query).subscribe((data) => { this.list = data });
  }

  leadDet(id: string) {
    this.router.navigate(['/lead-details/'+id.toString()]);
  }

}

import { Router } from '@angular/router';
import { ApiServiceService } from './../api-service.service';
import { QueryModel } from './../../models/querymodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornitori',
  templateUrl: './fornitori.page.html',
  styleUrls: ['./fornitori.page.scss'],
})
export class FornitoriPage implements OnInit {

  constructor(private Api: ApiServiceService,
              private router: Router) { }

  list = [];

  ngOnInit() {
    this.queryBuild();
  }

  queryBuild = () => {
    var query= new QueryModel;
    this.list = [];
    query.column = "a.name, b.name as bpartnername, ad_user_id, email";
    query.table = "ad_user a inner join c_bpartner b on a.c_bpartner_id = b.c_bpartner_id";
    query.where = "a.c_bpartner_id > 0";
    this.Api.getData(query).subscribe((data) => { 
      this.list = data;
    });
  }

  leadDet(id: string) {
    this.router.navigate(['/lead-details/'+id.toString()]);
  }

}

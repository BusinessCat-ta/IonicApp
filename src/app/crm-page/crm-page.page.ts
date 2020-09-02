import { LeadDetails } from './../../models/LeadDetails';
import { QueryModel } from './../../models/querymodel';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular'
import {Router} from '@angular/router'
import * as _ from 'underscore';




@Component({
  selector: 'crm-page',
  templateUrl: 'crm-page.page.html',
  styleUrls: ['crm-page.page.scss']
})
export class CrmPagePage implements OnInit{


  list: LeadDetails[] = [];
  list1: LeadDetails[] = [];

  constructor(private Api: ApiServiceService, 
              private menu: MenuController, 
              private router: Router) { }

  ngOnInit(): void {
    this.queryBuild();
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      console.log((navigator as any).contacts);
    }
  }

  queryBuild = () => {
    /* var query= new QueryModel; */
    this.list = [];
    this.list1 = [];
    /* query.column = "name, c_bpartner_id, ad_user_id, leadstatus, phone";
    query.table = "ad_user";
    query.where = "leadstatus != 'null' and issaleslead = 'Y'"; */
    this.Api.getData('').subscribe((data) => { 
      this.list = data;
      this.list1 = data;
      console.log(this.list);
    });
  }

  leadDet(id: string) {
    this.router.navigate(['/lead-details/'+id.toString()]);
  }

  addLead(id: string){
    this.router.navigate(['/lead-form/'+id]);
  }

  importContact(){
    (navigator as any).contacts.pickContact(function(contact){
      console.log('The following contact has been selected:' + JSON.stringify(contact));
    },function(err){
      console.log('Error: ' + err);
    });
  }

  segmentChanged(ev: any) {
   this.list1=_.where(this.list, {LeadStatus: ev.detail.value});
  }

  

}

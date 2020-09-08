import { LeadDetails } from './../../models/LeadDetails';
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
              private router: Router,
              private contacts: Contacts) { }

  ngOnInit(): void {
    this.queryBuild();
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      console.log((navigator as any).contacts);
    }
  }

  queryBuild(){
    this.list = [];
    this.list1 = [];
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
    let newLead = new LeadDetails();
    (navigator as any).contacts.pickContact(function(contact){
      newLead.Name = contact.name.givenName;
      newLead.Phone = contact.phoneNumbers[0].value;
      newLead.EMail = contact.emails[0].value;
    },function(err){
      console.log('Error: ' + err);
    });
    this.saveLead(newLead);
  }

  saveLead(lead: LeadDetails){
    console.log(lead);
    this.Api.importLead(lead);
  }

  segmentChanged(ev: any) {
   this.list1=_.where(this.list, {LeadStatus: ev.detail.value});
  }

  doRefresh(event) {
    this.queryBuild();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  

}

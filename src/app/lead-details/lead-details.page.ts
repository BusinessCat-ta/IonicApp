import { LeadDetails } from './../../models/LeadDetails';
import { QueryModel } from './../../models/querymodel';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ActionSheetController } from '@ionic/angular';
import {Router} from  '@angular/router'

import { CallNumber } from '@ionic-native/call-number/ngx';


declare let cordova: any;

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.page.html',
  styleUrls: ['./lead-details.page.scss'],
})
export class LeadDetailsPage implements OnInit {

  lead = new LeadDetails();
  idLead: string;

  constructor(private route: ActivatedRoute, 
              private Api: ApiServiceService,
              public actionSheetController: ActionSheetController, 
              private router: Router,
              public callnumber: CallNumber) { }

  ngOnInit() {

    document.addEventListener('deviceready', function () {
      // cordova.plugins.email is now available
    }, false);

    cordova.plugins.email.isAvailable(
      function (isAvailable) {
          // alert('Service is not available') unless isAvailable;
      }
    );

    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
        this.idLead = id;
        var query= new QueryModel;
        query.column = "name, email, phone, ad_user_id";
        query.table = "ad_user";
        query.where = "ad_user_id = "+id;
        this.Api.getData(query).subscribe((data) => { this.lead = data[0] });
    });


  }

  async opzioniContatto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opzioni',
      cssClass: '',
      buttons: [{
        text: 'Cancella Lead',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      
      },{
        text: 'Modifica Lead',
        icon: 'cog-outline',
        handler: () => {
          this.router.navigate(['/lead-form/'+ this.idLead]);
        }
      }, {
        text: 'Telefona',
        icon: 'call-outline',
        handler: () => {
          this.callnumber.callNumber( this.lead.phone , true)
          .then(res => this.insertLog(this.lead.name , 'Call', Date.now() , 1))
          .catch(err => console.log('Error launching dialer', err));
        }
      }, {
        text: 'Invia E-mail',
        icon: 'mail-outline',
        handler: () => {
          let mail = {
            to: this.lead.email,
            isHtml: true
          }
          cordova.plugins.email.open(mail);
          this.insertLog(this.lead.name,'Email', Date.now() , 1);
        }
      }, {
        text: 'Aggiungi Offerta',
        icon: 'cash-outline',
        handler: () => {
          this.router.navigate(['/descrizione/'+this.idLead]);
        }
      }, {
        text: 'Annulla',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  insertLog(cliente: string, evento: string, data: number, id: number){
    this.Api.addLog(cliente,evento, data, id);
  }

  



}

import { LeadDetails } from './../../models/LeadDetails';
import { QueryModel } from './../../models/querymodel';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.page.html',
  styleUrls: ['./lead-details.page.scss'],
})
export class LeadDetailsPage implements OnInit {

  lead: Object;

  constructor(private route: ActivatedRoute, private Api: ApiServiceService,public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
        var query= new QueryModel;
        query.column = "name, email, phone";
        query.table = "ad_user";
        query.where = "ad_user_id = "+id;
        this.Api.getData(query).subscribe((data) => { this.lead = data });
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
      }, {
        text: 'Telefona',
        icon: 'call-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Invia E-mail',
        icon: 'mail-outline',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Promuovi a Opportunità',
        icon: 'cash-outline',
        handler: () => {
          console.log('Favorite clicked');
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

}

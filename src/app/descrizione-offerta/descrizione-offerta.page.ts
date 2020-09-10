import { Opportunity } from './../../models/OpportunityModel';
import { LeadDetails } from './../../models/LeadDetails';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from './../api-service.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-descrizione-offerta',
  templateUrl: './descrizione-offerta.page.html',
  styleUrls: ['./descrizione-offerta.page.scss'],
})
export class DescrizioneOffertaPage implements OnInit {

  leadid="";
  lead: LeadDetails = history.state.lead;
  leadname = this.lead.Name;

  constructor(private navCtrl: NavController,
              private Api: ApiServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.leadid = id;
    });

  }


  insertDesc(desc: string, sstage: number, time: string){
    let opp = new Opportunity;
    const lead = parseInt(this.leadid);
    console.log(time);
    let EndTime = time.slice(0, 19).replace('T', ' ');
    opp.Description = this.lead.Name
    opp.Comments = desc;
    opp.C_BPartner_ID = this.lead.C_BPartner_ID;
    opp.SalesRep_ID = parseInt(localStorage.getItem('ADuser'));
    opp.C_SalesStage_ID = sstage;
    opp.C_Currency_ID = 102;
    opp.ExpectedCloseDate = EndTime;
    this.Api.postOpp(opp);
    this.Api.addLog(lead, "Offer");
    this.navCtrl.back();
  }

}

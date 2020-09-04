import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from './../api-service.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descrizione-offerta',
  templateUrl: './descrizione-offerta.page.html',
  styleUrls: ['./descrizione-offerta.page.scss'],
})
export class DescrizioneOffertaPage implements OnInit {

  leadname="";

  constructor(private navCtrl: NavController,
              private Api: ApiServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.leadname = id;
    });

  }


  insertDesc(desc: string){
    alert(desc);
    const lead = parseInt(this.leadname);
    this.Api.addLog(lead, "Offer");
    this.navCtrl.back();
  }

}

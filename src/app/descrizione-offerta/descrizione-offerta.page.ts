import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descrizione-offerta',
  templateUrl: './descrizione-offerta.page.html',
  styleUrls: ['./descrizione-offerta.page.scss'],
})
export class DescrizioneOffertaPage implements OnInit {

  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  insertDesc(desc: string){
    alert(desc);
    this.navCtrl.back();
  }

}

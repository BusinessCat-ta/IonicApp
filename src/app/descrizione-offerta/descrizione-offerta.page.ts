import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descrizione-offerta',
  templateUrl: './descrizione-offerta.page.html',
  styleUrls: ['./descrizione-offerta.page.scss'],
})
export class DescrizioneOffertaPage implements OnInit {

  
  desc ="";
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  insertDesc(){
    alert(this.desc);
    this.navCtrl.back();
  }

}

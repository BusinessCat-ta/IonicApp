import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'

@Component({
  selector: 'app-produzione',
  templateUrl: './produzione.page.html',
  styleUrls: ['./produzione.page.scss'],
})
export class ProduzionePage implements OnInit {

  constructor(private barcode: BarcodeScanner) { }

  ngOnInit() {
  }

  scanCode(){
    this.barcode.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      alert(barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  

  

}

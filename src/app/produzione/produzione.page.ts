import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'


@Component({
  selector: 'app-produzione',
  templateUrl: './produzione.page.html',
  styleUrls: ['./produzione.page.scss'],
})
export class ProduzionePage implements OnInit {
  
  @Output() getDistinta = new EventEmitter();

  constructor(private barcode: BarcodeScanner) { }

 
  prodCode = "";
  
  ngOnInit() {
  }

  scanCode(){
    this.barcode.scan().then(barcodeData => {
      this.prodCode = barcodeData.text;
    }).catch(err => {
         console.log('Error', err);
    });
  }

  goToList(){
    this.getDistinta.emit(this.prodCode);
  }
  

  

}

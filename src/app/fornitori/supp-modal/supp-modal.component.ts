import { FornitoriModel } from './../../../models/FornitoriModel';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supp-modal',
  templateUrl: './supp-modal.component.html',
  styleUrls: ['./supp-modal.component.scss'],
})
export class SuppModalComponent implements OnInit {

  @Input() supplier: FornitoriModel;

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {}

  async closeModal(){
    this.ModalCtrl.dismiss();
  }

}

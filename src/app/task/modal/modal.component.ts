import { Task } from './../../../models/TaskLog';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  
  @Input() task: Task;

  constructor(private ModalCtrl: ModalController) { }

  async closeModal(){
    this.ModalCtrl.dismiss();
  }

  ngOnInit() {}

}

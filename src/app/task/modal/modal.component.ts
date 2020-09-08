import { Router } from '@angular/router';
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

  Bflag = false

  constructor(private ModalCtrl: ModalController,
              private router: Router) { }

  async closeModal(){
    this.ModalCtrl.dismiss();
  }

  ngOnInit() {
    if(!this.task.LIT_AD_UserTo_ID){
      this.Bflag = true;
    }
  }

  goToLead(id:number){
    this.router.navigate(['lead-details/'+id]);
    this.closeModal();
  }

}

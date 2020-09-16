import { ApiServiceService } from './../../api-service.service';
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
              private router: Router,
              private Api: ApiServiceService) { }

  async closeModal(){
    this.ModalCtrl.dismiss();
  }

  ngOnInit() {
    if(!this.task.activity_ad_user_id){
      this.Bflag = true;
    }
  }

  goToLead(id:number){
    this.router.navigate(['lead-details/'+id]);
    this.closeModal();
  }

  taskCompleted(){
    let completed = {
      id : this.task.id,
      IsComplete : 'Y'
    }
    this.Api.isTaskComplete(completed).subscribe(_=> {
      this.closeModal();
    })
  }
}

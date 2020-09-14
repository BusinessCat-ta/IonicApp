import { ModalComponent } from './modal/modal.component';
import { Task } from './../../models/TaskLog';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as _ from 'underscore';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  constructor(private Api: ApiServiceService,
              private ModalCtrl: ModalController) { }

  ngOnInit() {
    this.queryBuild();
  }

  list: Task[] = [];
  list1: Task[] = [];
  task: Task;

  queryBuild = () => {
    this.list = [];
    this.Api.getTask().subscribe((data)=>{
      this.list = data;
      this.list1 = _.sortBy(this.list, x => x.Priority)
      console.log(this.list1);
    });
  }

  openModal(tsk: Task) {
    this.task = tsk;
    this.showModal();
  }

  async showModal() {
    const modal = await this.ModalCtrl.create({
      component: ModalComponent,
      componentProps: {
        task: this.task
      }
    })

    modal.onDidDismiss().then(_=> {
      this.queryBuild();
    })

    await modal.present();
  }

  

}

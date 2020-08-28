import { ModalComponent } from './modal/modal.component';
import { Task } from './../../models/TaskLog';
import { ApiServiceService } from './../api-service.service';
import { QueryModel } from './../../models/querymodel';
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
    var query = new QueryModel;
    this.list = [];
    query.column = "ad_client_id, description, ad_user_id, salesrep_id, name, priority";
    query.table = "c_contactactivity";
    query.where = "ismobileenabled = 'Y'";
    this.Api.getTask(query).subscribe((data) => {
      this.list = data;
    });
    this.list1 = _.sortBy(this.list, x => -x.priority)
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
    await modal.present();
  }

}

import { LeadDetails } from './../../models/LeadDetails';
import { ActivatedRoute } from '@angular/router';
import { QueryModel } from './../../models/querymodel';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit, Query } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.page.html',
  styleUrls: ['./lead-form.page.scss'],
})
export class LeadFormPage implements OnInit {

  constructor(private Api: ApiServiceService, 
              private toastController: ToastController, 
              public formbuilder: FormBuilder,
              private route: ActivatedRoute
              ) { }

    lead: LeadDetails;
    title: string;
  
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      if(id !== 'new'){
        this.title = "Modifica";
        var query= new QueryModel;
        query.column = "name, email, phone";
        query.table = "ad_user";
        query.where = "ad_user_id = "+id;
        this.Api.getData(query).subscribe((data) => { this.lead = data });
    }else{
      this.title = "Inserimento";
      this.lead.name = "";
      this.lead.email = "";
      this.lead.phone = "";
    }
    });
    
  }

  insertForm = new FormGroup({
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    email: new FormControl('',Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'))
 })

  async ToastError() {
    const toast = await this.toastController.create({
      cssClass: "Toasterror",
      message: "Inserisci i campi obbligatori",
      duration: 2500
    });
    toast.present();
  }

  async ToastAccept() {
    const toast = await this.toastController.create({
      cssClass: "Toastaccept",
      message: "Inserimento Effettuato",
      duration: 2500
    });
    toast.present();
  }

  addLead(){
    alert("wewe");

  }
}

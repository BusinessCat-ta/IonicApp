import { LeadDetails } from './../../models/LeadDetails';
import { ActivatedRoute } from '@angular/router';
import { QueryModel } from './../../models/querymodel';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit, Query } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.page.html',
  styleUrls: ['./lead-form.page.scss'],
})
export class LeadFormPage implements OnInit {

  constructor(private Api: ApiServiceService, 
              private toastController: ToastController, 
              public fb: FormBuilder,
              private route: ActivatedRoute,
              private navCtrl: NavController) { }

    lead= new LeadDetails;
    title: string;
  
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      if(id != 'new'){
        this.title = "Modifica";
        var query= new QueryModel;
        query.column = "name, email, phone";
        query.table = "ad_user";
        query.where = "ad_user_id = "+id;
        this.Api.getData(query).subscribe((data) => { this.lead = data[0] });
      }else{
        this.title = "Inserimento";
        this.lead.name = "";
        this.lead.email = "";
        this.lead.phone = "";
      }
    });
    
  }


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
    let newLead = new LeadDetails;
    newLead.name = this.lead.name;
    newLead.phone = this.lead.phone;
    newLead.email = this.lead.email;
    alert(newLead.email);
    this.ToastAccept();
    this.navCtrl.back();
  }
}

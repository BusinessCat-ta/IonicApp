import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.page.html',
  styleUrls: ['./lead-form.page.scss'],
})
export class LeadFormPage implements OnInit {

  constructor(private toastController: ToastController, public formbuilder: FormBuilder) { }


  ngOnInit() {
    
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

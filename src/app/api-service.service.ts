import { Storage } from '@ionic/storage';
import { TResponse } from './../models/TokenResponse';
import { Credentials } from './../models/Credentials';
import { Opportunity } from './../models/OpportunityModel';
import { FornitoriModel } from './../models/FornitoriModel';
import { Task } from './../models/TaskLog';
import { LogAgente } from './../models/LogModel';
import { LeadDetails } from './../models/LeadDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';

const EndPoint = "http://192.168.178.101:8080/services/api/idempierepara/web/search/";


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient,
              private storage: Storage) { }



  getData(id: string){
    return this.http.get<LeadDetails[]>(EndPoint+"getLead"+id);
  }

  getTask(){
    return this.http.get<Task[]>(EndPoint+"getTask");
  }

  getSuppliers(){
    return this.http.get<FornitoriModel[]>(EndPoint+"getSuppliers");
  }

  getOpp(){
    return this.http.get<Opportunity[]>(EndPoint+"getOpportunity");
  }

  addLog(cliente: number, evento: string,){
    const format = "YYYY-MM-DD HH:mm:ss"
    const time = Date.now();
    const idA = parseInt(localStorage.getItem('ADuser')) 
    let log = new LogAgente();
    log.LIT_AD_UserTo_ID = cliente;
    log.Comments = evento;
    log.Description= "LOG";
    //log.StartDate = moment(time).format(format);
    log.SalesRep_ID = idA;
    log.AD_User_ID = idA;
    log.AD_Client_ID= 1000006;
    log.C_Activity_ID = 1000010;
    log.AD_Org_ID= 1000006;
    log.Name = "-";
    log.ContactActivityType = "TA";
    console.log(log);
    this.http.post(EndPoint+"postTask", log).subscribe((data)=>{
      console.log(data);
    })
  }

  modifyLead(lead: LeadDetails){
    console.log(lead);
    if(lead.AD_User_ID){
      console.log(lead);
      this.http.put(EndPoint+"putLead_"+lead.AD_User_ID, lead).subscribe((data) => {
        console.log(data);
      });
    } else {
      this.http.post(EndPoint+"postLead", lead).subscribe((data) =>{
        console.log(data);
      });
    }
  }

  getLogs(id: string){
    return this.http.get<LogAgente>(EndPoint+"getLogs"+id);
  }

  logMeIn(cred: Credentials){
    console.log(cred);
    return this.http.post<TResponse>("http://192.168.178.101:8080/services/api/auth/login", cred);
  }
}

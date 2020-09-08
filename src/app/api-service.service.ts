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
    let id = localStorage.getItem('ADuser');
    return this.http.get<Task[]>(EndPoint+"getTask_"+id);
  }

  getSuppliers(){
    return this.http.get<FornitoriModel[]>(EndPoint+"getSuppliers");
  }

  getOpp(){
    return this.http.get<Opportunity[]>(EndPoint+"getOpportunity");
  }

  postOpp(opp: Opportunity){
    console.log(opp);
    this.http.post(EndPoint+"postOpp", opp).subscribe((data)=> {
      console.log(data);
    });
  }

  importLead(lead: LeadDetails){
    lead.IsSalesLead = 'Y';
    lead.LeadStatus = 'N';
    lead.AD_Client_ID = parseInt(localStorage.getItem('ADclient'));
    return this.http.post(EndPoint+"postLead", lead).subscribe((data)=>{
      console.log(data);
    });
  }

  addLog(cliente: number, evento: string,){
    const idA = parseInt(localStorage.getItem('ADuser'));
    const adclient = parseInt(localStorage.getItem('ADclient'));
    const orgid = parseInt(localStorage.getItem('OrgId'));
    let log = new LogAgente();
    log.LIT_AD_UserTo_ID = cliente;
    log.Comments = evento;
    log.Description= "LOG";
    log.SalesRep_ID = idA;
    log.AD_User_ID = idA;
    log.AD_Client_ID= adclient;
    log.C_Activity_ID = 1000010;
    log.AD_Org_ID= orgid;
    log.Name = "-";
    log.ContactActivityType = "TA";
    console.log(log);
    this.http.post(EndPoint+"postTask", log).subscribe((data)=>{
      console.log(data);
    })
  }

  modifyLead(lead: LeadDetails){
    console.log(lead);
    lead.IsSalesLead = 'Y';
    if(lead.AD_User_ID){
      console.log(lead);
      this.http.put(EndPoint+"putLead_"+lead.AD_User_ID, lead).subscribe((data) => {
        console.log(data);
      });
    } else {
      lead.AD_Client_ID= parseInt(localStorage.getItem('ADclient'))
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

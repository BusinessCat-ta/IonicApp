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



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient,
              private storage: Storage) { }

IP = localStorage.getItem('TargetIP'); 
EndPoint = "http://"+this.IP+"/services/api/idempierepara/web/search/";

  setIP(){
    this.IP = localStorage.getItem('TargetIP'); 
    this.EndPoint = "http://"+this.IP+"/services/api/idempierepara/web/search/";
  }

  getData(id: string){
    return this.http.get<LeadDetails[]>(this.EndPoint+"getLead"+id);
  }

  getTask(){
    let id = localStorage.getItem('ADuser');
    return this.http.get<Task[]>(this.EndPoint+"getTask_"+id);
  }

  getSuppliers(){
    return this.http.get<FornitoriModel[]>(this.EndPoint+"getSuppliers");
  }

  getOpp(){
    return this.http.get<Opportunity[]>(this.EndPoint+"getOpportunity");
  }

  postOpp(opp: Opportunity){
    this.http.post(this.EndPoint+"postOpp", opp).subscribe((data)=> {
      console.log(data);
    });
  }

  importLead(lead: LeadDetails){
    lead.IsSalesLead = 'Y';
    lead.LeadStatus = 'N';
    return this.http.post(this.EndPoint+"postLead", lead).subscribe((data)=>{
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
    log.C_Activity_ID = 1000010;
    log.Name = "-";
    log.ContactActivityType = "TA";
    this.http.post(this.EndPoint+"postTask", log).subscribe((data)=>{
      console.log(data);
    })
  }

  modifyLead(lead: LeadDetails){
    console.log(lead);
    lead.IsSalesLead = 'Y';
    if(lead.AD_User_ID){
      console.log(lead);
      this.http.put(this.EndPoint+"putLead_"+lead.AD_User_ID, lead).subscribe((data) => {
        console.log(data);
      });
    } else {
      this.http.post(this.EndPoint+"postLead", lead).subscribe((data) =>{
        console.log(data);
      });
    }
  }

  getLogs(id: string){
    return this.http.get<LogAgente>(this.EndPoint+"getLogs"+id);
  }

  isTaskComplete(task){
    return this.http.post(this.EndPoint+"putTask_"+task.id , task);
  }

  logMeIn(cred: Credentials){
    console.log(cred);
    return this.http.post<TResponse>("http://"+this.IP+"/services/api/auth/login", cred);
  }

  
}

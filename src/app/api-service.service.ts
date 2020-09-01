import { TResponse } from './../models/TokenResponse';
import { Credentials } from './../models/Credentials';
import { Opportunity } from './../models/OpportunityModel';
import { FornitoriModel } from './../models/FornitoriModel';
import { Task } from './../models/TaskLog';
import { LogAgente } from './../models/LogModel';
import { LeadDetails } from './../models/LeadDetails';
import { QueryModel } from './../models/querymodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }


  LogList = [];

  getData(){
    return this.http.get<LeadDetails[]>("http://localhost:8080/services/api/idempierepara/web/search/getLead");
  }

  getTask(request: QueryModel){
    return this.http.post<Task[]>("http://192.168.178.101:3000/role", request);
  }

  getSuppliers(request: QueryModel){
    return this.http.post<FornitoriModel[]>("http://192.168.178.101:3000/role", request);
  }

  getOpp(request: QueryModel){
    return this.http.post<Opportunity[]>("http://192.168.178.101:3000/role", request);
  }

  addLog(cliente: string, evento: string, data: number, id: number){
    let log = new LogAgente();
    log.client = cliente;
    log.event = evento;
    log.data = data;
    log.idAgente = id;
    this.LogList.push(log);
  }

  getLogs(){
    return this.LogList;
  }

  logMeIn(cred: Credentials){
    console.log(cred);
    return this.http.post<TResponse>("http://localhost:8080/services/api/auth/login", cred);
  }
}

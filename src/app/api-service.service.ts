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

  getData(request: QueryModel){
    return this.http.post<LeadDetails[]>("http://192.168.178.101:3000/role", request);
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
}

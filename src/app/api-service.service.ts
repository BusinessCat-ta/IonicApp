import { QueryModel } from './../models/querymodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getData(request: QueryModel){
    return this.http.post("http://localhost:3000/role", request);
  }
}

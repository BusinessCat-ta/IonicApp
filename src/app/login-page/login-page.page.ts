import { Router } from '@angular/router';
import { Credentials } from './../../models/Credentials';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(private Api: ApiServiceService,
              private router: Router,
              private storage: Storage) { }

  ngOnInit() {
    this.keepLogged();
  }

  cred =  new Credentials;
  uName = localStorage.getItem('username');
  ip = localStorage.getItem('TargetIP');

  Login(password: string, rme: boolean){
    this.cred.username = this.uName;
    this.cred.password = password;
    this.Api.logMeIn(this.cred).subscribe((data) => {
      if(rme){
        localStorage.setItem('username', this.uName);
      }
      let decoded = jwt_decode(data.token);
      console.log(decoded);
      localStorage.setItem('token', data.token);
      localStorage.setItem('ADuser', decoded.idUser);
      this.router.navigate(['/crm']);
    });
  }

  keepLogged(){
    if(!helper.isTokenExpired(localStorage.getItem('token'))){
      this.router.navigateByUrl('/crm');
    }
  }

  ipConfig(){
    console.log(this.ip);
    localStorage.setItem('TargetIP', this.ip);
    this.Api.setIP();
  }

}

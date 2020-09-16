import { Router } from '@angular/router';
import { Credentials } from './../../models/Credentials';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { trigger, transition, animate, style } from '@angular/animations'

const helper = new JwtHelperService();

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
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
  visible = false;

  Login(password: string, rme: boolean){
    this.ipConfig();
    this.cred.username = this.uName;
    this.cred.password = password;
    this.Api.logMeIn(this.cred).subscribe((data) => {
      if(rme){
        localStorage.setItem('username', this.uName);
      }
      let decoded = jwt_decode(data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('ADuser', decoded.idUser);
      this.router.navigate(['/landing-page']);
    });
  }

  keepLogged(){
    if(!helper.isTokenExpired(localStorage.getItem('token'))){
      this.router.navigateByUrl('/landing-page');
    }
  }

  ipConfig(){
    console.log(this.ip);
    localStorage.setItem('TargetIP', this.ip);
    this.Api.setIP();
  }

}

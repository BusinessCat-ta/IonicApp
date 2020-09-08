import { Router } from '@angular/router';
import { Credentials } from './../../models/Credentials';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as jwt_decode from 'jwt-decode';

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
  }

  cred =  new Credentials;

  Login(username: string, password: string){
    this.cred.username = username;
    this.cred.password = password;
    this.Api.logMeIn(this.cred).subscribe((data) => {
      let decoded = jwt_decode(data.token);
      console.log(decoded);
      localStorage.setItem('token', data.token);
      localStorage.setItem('ADuser', decoded.idUser);
      localStorage.setItem('ADclient', '1000006');
      localStorage.setItem('OrgId', '1000006');
      this.router.navigate(['/crm']);
    });
  }

}

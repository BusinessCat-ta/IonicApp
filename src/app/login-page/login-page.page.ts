import { Router } from '@angular/router';
import { Credentials } from './../../models/Credentials';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(private Api: ApiServiceService,
              private router: Router) { }

  ngOnInit() {
  }

  cred =  new Credentials;

  Login(username: string, password: string){
    this.cred.username = username;
    this.cred.password = password;
    this.Api.logMeIn(this.cred).subscribe((data) => {
      localStorage.setItem("token", data.token)
      this.router.navigate(['/crm']);
    });
  }

}

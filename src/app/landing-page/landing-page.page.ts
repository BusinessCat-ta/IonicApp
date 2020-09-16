import { MenuItem } from './../../models/Menu';
import { ApiServiceService } from './../api-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(private router: Router, private Api: ApiServiceService) { }

  menu: MenuItem;

  ngOnInit() {
    this.Api.getMenu().subscribe((data)=> {
      this.menu = data;
    });
  }

  goTo(link: string){
    this.router.navigateByUrl(link);
  }

}

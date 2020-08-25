import { NavPagePage } from './nav-page/nav-page.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interventi-page',
  templateUrl: './interventi-page.page.html',
  styleUrls: ['./interventi-page.page.scss'],
})
export class InterventiPagePage implements OnInit {

  rootPage = NavPagePage

  constructor() { }

  ngOnInit() {
  }

}

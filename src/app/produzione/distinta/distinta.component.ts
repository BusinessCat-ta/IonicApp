import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-distinta',
  templateUrl: './distinta.component.html',
  styleUrls: ['./distinta.component.scss'],
})
export class DistintaComponent implements OnInit {

  constructor() { }

  @Input() barcode: string;

  ngOnInit() {}

  showDist(){
    alert("wewe");
  }

}

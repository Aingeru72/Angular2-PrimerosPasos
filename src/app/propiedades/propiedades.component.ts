import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.scss']
})
export class PropiedadesComponent implements OnInit {

  // atributos
  oculto: boolean;
  color: string;
  enlace: string;

  // constructor
  constructor() {
    console.log('Propiedades.constructor');
    this.oculto = true;
    this.color = 'steelblue';
    this.enlace = 'https://angular.io/api';
  }

  ngOnInit() {}

}

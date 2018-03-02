import { Component, OnInit, Input } from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  // Atributos
  // @Input('atributoDeEntrada') nombreVariable: tipoVariable;
  @Input('coche') coche: Coche;

  constructor() {
    console.log('CocheComponent constructor');
   }

  ngOnInit() {
    console.log('CocheComponent ngOnInit');
  }

}

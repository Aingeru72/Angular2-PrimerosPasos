import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

    // @Input('atributoDeEntrada') nombreVariable: tipoVariable;
    @Input('stock') stock: Array<Coche>;
    @Input('cocheUno') cocheUno: Coche;
    @Input('cocheDos') cocheDos: Coche;
    // @Output: parametro de salida, realizado mediante evento 'EventEmitter'
    @Output() eventoEmitido = new EventEmitter();

    searchText: string;

  constructor() { }

  ngOnInit() {

  }

   /**
   * Función para emitir el evento desde Hijo --> Padre
   */
  seleccionar($event, coche: Coche) {
    console.log('Coche seleccionado: %o', coche);
    this.eventoEmitido.emit({'coche': coche});

    this.cocheDos = this.cocheUno;
    this.cocheUno = coche;
  }

}

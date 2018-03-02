import { Component, OnInit } from '@angular/core';
import { Coche, Tipo } from '../model/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})

export class ConcesionarioComponent implements OnInit {

  // Atributos
  stock: Array<Coche>; // Array con elementos de tipo Coche
  coche1: Coche;  // 1.coche a comparar
  coche2: Coche;  // 2.coche a comparar

  constructor() {
    console.log('ConcesionarioComponent constructor');

    this.coche1 = new Coche('Coche1', '', '', 0, 0, 0, 0);
    this.coche2 = new Coche('Coche2', '', '', 0, 0, 0, 0);

    this.stock = new Array<Coche>();
    this.stock.push( new Coche('Audi', 'R8', '5.2 FSI Quattro', 3, 525, 13.7, Tipo.GASOLINA) );
    this.stock.push( new Coche('Ford', 'Mondeo', '', 5, 220, 7, Tipo.DIESEL) );
    this.stock.push( new Coche('Honda', 'Civic', '1.5 Turbo', 3, 115, 3, Tipo.HÍBRIDO) );
    this.stock.push( new Coche('Opel', 'Corsa', '', 5, 120, 5, Tipo.GASOLINA) );
  }

  ngOnInit() {
    console.log('ConcesionarioComponent init');
  }

  /**
   * Función para recibir el coche seleccionado por el hijo: Concesionario <-- Coche
   * @param event: coche seleccionado en el CatalogoComponent
   */
  recibirCoche(event) {
    console.log('ConcesionarioComponent recibirCoche(coche): %o', event.coche);
    this.coche2 = this.coche1;
    this.coche1 = event.coche;
  }

}

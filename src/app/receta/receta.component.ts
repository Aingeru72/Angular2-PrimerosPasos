import { Component, OnInit } from '@angular/core';

import { Receta } from "../model/receta";

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  receta: Receta;
  // variables del menú desplegable de ingredientes
  mostrarIngredientes: boolean;
  glyphicon: string

  constructor() {
    console.log('RecetaComponent Constructor');

    this.receta = new Receta('Marmitako', 'Karlos Argiñano');
    this.receta.addIngrediente('Patatas');
    this.receta.addIngrediente('Bonito');
    this.receta.addIngrediente('Pimiento choricero');
    this.receta.addIngrediente('Pimiento verde');
    this.receta.addIngrediente('Aceite');

    // menú de ingredientes oculto y el icono 'down' por defecto
    this.mostrarIngredientes = false;
    this.glyphicon = 'glyphicon-chevron-down';
   }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  incrLike() {
    console.log('incrLike()')
    this.receta.likes++;
  }

  showIngredientes() {
    console.log('click showIngredientes()');
    this.mostrarIngredientes = !this.mostrarIngredientes;
    this.glyphicon = (this.mostrarIngredientes) ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down';
  }

}

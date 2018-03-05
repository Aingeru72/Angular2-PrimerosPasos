import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../../model/receta';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.scss']
})
export class RecetaDetalleComponent implements OnInit {

  @Input('receta') receta: Receta;

  constructor() {
    console.log('RecetaDetalleComponent constructor()');
  }

  ngOnInit() {
    console.log('RecetaDetalleComponent ngOnInit()');
    console.log('Detalle de la receta: %o', this.receta);
  }

  /**
   * Incremetar likes
  */
  sumLike() {
    console.log('RecetarioComponent sumLike()');
    this.receta.likes++;
  }

}

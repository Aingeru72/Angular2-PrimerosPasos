import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../../model/receta';
import { RecetasService } from '../../providers/recetas.service';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.scss']
})
export class RecetaDetalleComponent implements OnInit {

  @Input('receta') receta: Receta;

  constructor( public recetasService: RecetasService ) {
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

    // TODO: cambiar atributo en el servidor
    this.recetasService.patch(this.receta.id, this.receta.likes).subscribe(
      resultado => {
        // tslint:disable-next-line:no-console
        console.debug('peticion correcta %o', resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );
  }
}
